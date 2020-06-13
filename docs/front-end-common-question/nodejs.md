# NodeJS & MongoDB

**Module:**

module.exports.log = function：这里 log 是个对象，里面包含 function

module.exports = function：这个如果 let log = require\('./log'\)，可以直接调用 log\(\)。

一个 module 其实是一个 Immediate Invoke 函数：\(function\(exports, require, module, \_\_filename, \_\_dirname\) {}\); 所以这里几个常见参数都不是 global 的，这些叫 module wrapper function，注意 exports 是 module.exports 的引用，所以不能用 exports = log 这种操作来更改引用。global 的包含什么 console.log\(\), setInterval\(\), setTimeout\(\)这些。

**Http Module:**

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }
});

server.listen(3000);
console.log("Listening on port 3000...");
```

**NPM:**

version: ^4.13.6\(major.minor.patch\), the minor version change doesn't break the existing API.

* ^4.13.6 = 4.x
* ~4.13.6 = 4.13.x

## Express

```javascript
const app = express();

app.use('/api/admin', (res, req, next) => {
  ...
  next();
}); // middleware
```

* A middleware function is a function that takes a request object and either

  terminates the request/response cycle

  or passes control to another middleware

  function.

### Common plugin in Express

Express has a few built-in middleware functions:

* json\(\): to parse the body of requests with a JSON payload
* urlencoded\(\): to parse the body of requests with URL-encoded payload
* static\(\): to serve static files

**Helmet** Set various Http headers to secure the apps

**Morgan** Http request logger

**Config** Organize the configuration for deployment.

**Debug** Package used for output the debug information in terminal

Async and Await 只是.then\(\)的callback函数的语法糖。

## MongoDB

MongoDB is an open-source document database. It stores data in flexible, JSON-like documents.

* In relational databases we have tables and rows, in MongoDB we have **collections** and **documents**. A document can contain sub-documents.
* To connect to MongoDB:

```javascript
const mongoose = require(‘mongoose’);

mongoose.connect(‘mongodb://localhost/playground')
    .then(() => console.log(‘Connected...’))
    .catch(err => console.error(‘Connection failed...’));
```

* To store objects in MongoDB, we need to define a Mongoose schema first. The supported types are: **String, Number, Date, Buffer** \(for storing binary data\), **Boolean and ObjectID**.

```javascript
const courseSchema = new mongoose.Schema({
    name: String,
    price: Number
});
```

* We can use a SchemaType object to provide additional details:

```javascript
const courseSchema = new mongoose.Schema({
    isPublished: { type: Boolean, default: false }
});
```

* To create a model

```javascript
const Course = mongoose.model(‘Course’, courseSchema)
```

### CRUD Operations in Controller

**Query first:** find the target first and then update.

**Update first:** update data directly in DB.

```javascript
// Saving a document 
let course = new Course({ name: ‘...’ });
course = await course.save();

// Querying documents
const courses = await Course
    .find({ author: ‘...’, isPublished: true })
    .skip(10) // starts reulst at index 10
    .limit(10) // size of 10
    .sort({ name: 1, price: -1 })
    .select({ name: 1, price: 1 });
    
// Updating a document (query first) 
const course = await Course.findById(id);

if (!course) return; 
course.set({ name: ‘...’ });
course.save();

// Updating a document (update first) 
const result = await Course.update(
    { _id: id }, 
    { $set: { name: ‘...’ }}
);

// Updating a document (update first) and return it
const result = await Course.findByIdAndUpdate(
    { _id: id }, 
    {    
        $set: { name: ‘...’ }
    }, 
    { new: true }
);

// Removing a document 
const result = await Course.deleteOne({ _id: id });
const result = await Course.deleteMany({ _id: id });
const course = await Course.findByIdAndRemove(id);
```

A Customer schema model example:

```javascript
const Joi = require("joi");
const mongoose = require("mongoose");

// Adding validation
const customerSchema = new mongoose.Schema({
  /*
    Built-in validators:
    -Strings: minlength, maxlength, match, enum, 
              lowercase, uppercase, trim
    -Numbers: min, max
    -Dates: min, max
    -All types: required
  */
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isGold: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20
  },
  // Custom validation 
  tags: [
    type: Array,
    validate: {
      validator: function(v) { 
        return v && v.length > 0; 
      },
      message: ‘A course should have at least 1 tag.’
    }
  ]
});

const Customer = mongoose.model("Customer", customerSchema);

// Use Joi to validate the types before requesting DB
function validateCustomer(customer) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    phone: Joi.string()
      .min(5)
      .max(20)
      .required(),
    isGold: Joi.boolean()
  };
  return Joi.validate(customer, schema);
}

exports.customerSchema = customerSchema;
exports.Customer = Customer;
exports.validate = validateCustomer;

```

### Modelling Relationships between Connected Data <a id="lecture_heading"></a>

如果两个model\(collection\)之间有联系怎么办，比如course和student之间需要有联系。有三种办法，一个是reference，一个是embedded，最后一个是hybrid混合前两个方法。第一种：

```javascript
// Referencing a document 
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const Author = mongoose.model('Author', new mongoose.Schema({
  name: String,
  bio: String,
  website: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: {        
    type: mongoose.Schema.Types.ObjectId, // 这里reference 了author的id
    ref: ‘Author’
  }
}));

async function createAuthor(name, bio, website) { 
  const author = new Author({
    name, 
    bio, 
    website 
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course
    .find()
    .populate('author', '-_id') // 这个函数把author除了_id以外的所有属性
    .select('name');
  console.log(courses);
}

createAuthor('Sean', 'My bio', 'My Website');
createCourse('Node Course', 'authorId5ab4d')
listCourses();
```

第二种：

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: authorSchema, // 把真个authorSchema 全部照搬过来
}));

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

// Query first
async function updateAuthorInCourse(courseId) {
  const course = await Course.findById(courseId);
  course.author.name = 'Sean Luo';
  course.save();
}

// Update first
async function updateAuthorInCourse(courseId) {
  const course = await Course.update({ _id: courseId }, {
    $set: {
      'author.name': 'Sean Luo';
    }
  });
}


updateAuthorInCourse("5ab4d");
// createCourse('Node Course', new Author({ name: 'Mosh' }));

```

