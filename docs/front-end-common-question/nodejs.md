# NodeJS

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

### CRUD Operations

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

