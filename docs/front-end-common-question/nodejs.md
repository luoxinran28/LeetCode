# NodeJS

**Module:**

module.exports.log = function：这里log是个对象，里面包含function

module.exports = function：这个如果let log = require\('./log'\)，可以直接调用log\(\)。

一个module其实是一个Immediate Invoke函数：\(function\(exports, require, module, \_\_filename, \_\_dirname\) {}\); 所以这里几个常见参数都不是global的，这些叫module wrapper function，注意exports是module.exports的引用，所以不能用exports = log这种操作来更改引用。global的包含什么console.log\(\), setInterval\(\), setTimeout\(\)这些。

Http Module:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('hello world');
        res.end();
    }
});

server.listen(3000);
console.log("Listening on port 3000...");
```

NPM:



