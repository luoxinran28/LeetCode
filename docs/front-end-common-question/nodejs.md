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

如果两个model\(collection\)之间有联系怎么办，比如course和student之间需要有联系。有三种办法，一个是reference，一个是embedded，最后一个是hybrid混合前两个方法。第一种方法能有好的数据**consistency**，但是performance难以保证因为要发送几次query给数据库。

```javascript
/*
 Referencing documents (normalization) is a good approach when
 you want to enforce data consistency. Because there will be 
 a single instance of an object in the database. But this 
 approach has a negative impact on the performance of your 
 queries because in MongoDB we cannot JOIN documents as we 
 do in relational databases. So, to get a complete 
 representation of a document with its related documents, we 
 need to send multiple queries to the database
*/
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

第二种方法有一个好的查询**performance**，但如果数据没及时更新，consistency比较难以保证：

```javascript
/*
Embedding documents (denormalization) solves this issue. 
We can read a complete representation of a document with a 
single query. All the necessary data is embedded in one 
document and its children. But this also means we’ll have 
multiple copies of data in different places. While storage 
is not an issue these days, having multiple copies means 
changes made to the original document may not propagate to 
all copies. If the database server dies during an update, 
some documents will be inconsistent. For every business, 
for every problem, you need to ask this question: “can we 
tolerate data being inconsistent for a short period of time?” If not, you’ll have to use references. But again, this means that your queries will be slower.
*/
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

处理一对多的关系：

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
  authors: [authorSchema], // 包含多个authors
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function addAuthor(courseId, author) {
  const course = new Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

async function deleteAuthor(curseId, authorId) {
  const course = new Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
}

addAuthor('5ab4d', new Author("Sean 1"));
addAuthor('5ab4d', new Author("Sean 2")); // author id: 6ab4d
removeAuthor('5ab4d', '6ab4d');


```

MongoDB没有transaction，就是一个request要操作多个collections，我们可以使用“Two Phase Commit”，用Fawn可以实现：

```javascript
// Implementing transactions using Fawn 
try {
    await new Fawn.Task()
        .save(‘rentals’, newRental)
        .update(‘movies’,
            { _id: movie._id },
            { $inc: numberInStock: -1 }})       
        .run(); 
} 
catch (ex) {
    // At this point, all operations are automatically rolled back
} 
```

**ObjectIDs** are generated by MongoDB driver and are used to uniquely identify a document. They consist of 12 bytes: 

* 4 bytes: timestamp
* 3 bytes: machine identifier
* 2 bytes: process identifier
* 3 byes: counter 

ObjectIDs are almost unique. In theory, there is a chance for two ObjectIDs to be equal but the odds are very low \(1/16,000,000\) for most real-world applications.

### Authentication and Authorization

* Authentication is the process of determining if the user is who he/she claims to be. It involves validating their email/password.
* Authorization is the process of determining if the user has permission to perform a given operation.
* To hash passwords, use **bcrypt**:

```javascript
// Hashing passwords
const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(‘1234’, salt);

// Validating passwords
const isValid = await bcrypt.compare(‘1234’, hashed);
```

A JSON Web Token \(**JWT**\) is a JSON object encoded as a long string. We use them to identify users. It’s similar to a passport or driver’s license. It includes a few public properties about a user in its payload. These properties cannot be tampered because doing so requires re-generating the digital signature. When the user logs in, we generate a JWT on the server and return it to the client. We store this token on the client and send it to the server every time we need to call an API endpoint that is only accessible to authenticated users.

To generate JSON Web Tokens in an Express app use **jsonwebtoken** package.

```javascript
// Generating a JWT
const jwt = require(‘jsonwebtoken’);
const token = jwt.sign({ _id: user._id}, ‘privateKey’);
```

Never store private keys and other secrets in your codebase. Store them in environment variables. Use the config package to read application settings stored in environment variables. When appropriate, encapsulate logic in Mongoose models:

```javascript
// Adding a method to a Mongoose model
userSchema.methods.generateAuthToken = function() { }
const token = user.generateAuthToken();
```

Implement authorization using a middleware function. Return a 401 error \(unauthorized\) if the client doesn’t send a valid token. Return 403 \(forbidden\) if the user provided a valid token but is not allowed to perform the given operation.

You don’t need to implement logging out on the server. Implement it on the client by simply removing the JWT from the client.

Do not store a JWT in plain text in a database. This is similar to storing users’ passports or drivers license in a room. Anyone who has access to that room can steal these passports. Store JWTs on the client. If you have a strong reason for storing them on the server, make sure to encrypt them before storing them in a database.

