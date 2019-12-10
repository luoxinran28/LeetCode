/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */

return function(buf, n) {
  let tmp = [];
  let count = 0;
  let eof = false;
  while(!eof && count < n) {
    let ret_size = read4(tmp);
    if(ret_size !== 4) eof = true;
    for(let i = 0; i < ret_size && count < n; i++) {
      buf[count] = tmp[i];
      count++;
    }
    
  }
  return count;
};
};