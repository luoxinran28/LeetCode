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

version: ^4.13.6(major.minor.patch), the minor version change doesn't break the existing API.

- ^4.13.6 = 4.x
- ~4.13.6 = 4.13.x

## Express

```javascript
const app = express();

app.use('/api/admin', (res, req, next) => {
  ...
  next();
}); // middleware
```

- A middleware function is a function that takes a request object and either
  terminates the request/response cycle
  or passes control to another middleware
  function.

### Common plugin in Express

Express has a few built-in middleware functions:

- json(): to parse the body of requests with a JSON payload
- urlencoded(): to parse the body of requests with URL-encoded payload
- static(): to serve static files

**Helmet**
Set various Http headers to secure the apps

**Morgan**
Http request logger

**Config**
Organize the configuration for deployment.

**Debug**
Package used for output the debug information in terminal
