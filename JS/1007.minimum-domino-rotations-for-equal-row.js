/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
/*
主要思考点是，如果存在这样的array，那么要么A[0]或者要么B[0]满足要求。
Time O(N), Space O(1)

方法1：
如果满足交换条件，必然满足以下公式：
countA[i] + countB[i] - same[i] = n

举例：
A = [2,1,2,4,2,2]
B = [5,2,6,2,3,2]

countA[2] = 4, as A[0] = A[2] = A[4] = A[5] = 2
countB[2] = 3, as B[1] = B[3] = B[5] = 2
same[2] = 1, as A[5] = B[5] = 2

这样A[2] + countB[2] - same[2] = 6,

*/

/*
方法2：
如果A[0]可行，就没必要检查B[0]，反之亦然。那么我们可以只比较A[0]，用条件
A[i] == A[0] || B[i] == A[0] 来记录需要换多少个。当i到最后一位的时候返回置换A或者B最小值，
对于比较B[0]，条件是A[i] == B[0] || B[i] == B[0]
*/
var minDominoRotations = function(A, B) {
  if(A === null || B === null || A.length === 0 || A.length !== B.length) return -1;
  let count_a = 0, count_b = 0;
  for(let i = 0; i< A.length && (A[0] === A[i] || A[0] === B[i]); i++) {
    if(A[0] !== A[i]) count_a++;
    if(A[0] !== B[i]) count_b++;
    if(i === A.length - 1) return Math.min(count_a, count_b);
  }
  count_a = 0;
  count_b = 0;
  for(let i = 0; i< B.length && (B[0] === A[i] || B[0] === B[i]); i++) {
    if(B[0] !== A[i]) count_a++;
    if(B[0] !== B[i]) count_b++;
    if(i === B.length - 1) return Math.min(count_a, count_b);
  }
  return -1;
};
  
/*
方法3：
暴力遍历1-6，得到全部变成A要多少个，B必须和遍历值相同，然后再对B扫一次，A必须和遍历值相同，得到
最少需要换对少次。

*/

var minDominoRotations = function(A, B) {
  let min = Number.MAX_SAFE_INTEGER;
  
  for(let i = 1; i <= 6; i++) {
    min = Math.min(min, getRotationsNumber(A, B, i));
    min = Math.min(min, getRotationsNumber(B, A, i));
  }
  return min === Number.MAX_SAFE_INTEGER ? -1 : min;
  
  function getRotationsNumber(A, B, target) {
    let count = 0;
    // 以A为主要转换数组
    for(let i = 0; i < A.length; i++) {
      if(A[i] === target) continue;
      if(B[i] !== target) { // 如果B[i]不是target，说明A[i]和B[i]都不满足转化
        return Number.MAX_SAFE_INTEGER;
      }
      count++;
    }
    return count;
  }
  
}

