# Parentheses

## 如何判断括号是否匹配

最简单的办法是用stack记录左右括号是否匹配，或者用一个counter，记录"\("数量是否和"\)"一样。首先循环字符串字符记录"\)"右括号的数量，如果"\)"数量大于左括号"\("，立即返回false，循环结束后判断左右括号是否相等来判断是否匹配括号。

```javascript
  function isValid(s) {
    let count = 0;
    for(let ch of s) {
      if(ch === '(') count++;
      if(ch === ')') count--;
      if(count < 0) return false;
    }
    return count === 0;
  }
```



