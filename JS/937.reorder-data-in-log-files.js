/**
 * @param {string[]} logs
 * @return {string[]}
 */
// 通过判断最后一位决定letter-logs和digit-log，然后将letter-logs排序，
// 如果后半部分相同的话，要比较整个字符串，所以有
// sub_a.localeCompare(sub_b) === 0 ? a.localeCompare(b) : sub_a.localeCompare(sub_b)。
// 最后合并到res里面
var reorderLogFiles = function(logs) {
  let letters = [];
  let digits = [];
  for(let log of logs) {
    let charCode = log[log.length - 1].charCodeAt();
    if(charCode <= 57 && charCode >= 48) {
      digits.push(log);
    } else {
      letters.push(log);
    }
  }
  letters.sort(compare);
  
  function compare(a, b) {
    let sub_a = a.substring(a.indexOf(' ') + 1);
    let sub_b = b.substring(b.indexOf(' ') + 1);
    return sub_a.localeCompare(sub_b) === 0 ? a.localeCompare(b) : sub_a.localeCompare(sub_b);
  }

  return [...letters, ...digits];
};