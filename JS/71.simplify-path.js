/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let skip = new Set(["..", ".", ""]);
  let stack = [];
  for(let dir of path.split("/")) {
    if(dir === ".." && stack.length > 0) stack.pop();
    else if(!skip.has(dir)) stack.push(dir);
  }
  return "/"+stack.join("/");
};