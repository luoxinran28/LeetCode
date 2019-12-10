/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
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
  let left = 0, right = 0;
  let tmp = [];    
  return function(buf, n) {
    let cur = 0;
    while(cur < n) {
      if(left === right) { // needs a read4 to get new chars
        left = 0;
        right = read4(tmp);
        if(right === 0) break; // eof
      }
      while(left < right && cur < n) {
        buf[cur++] = tmp[left++];
      }
    }
    return cur;
  };
};