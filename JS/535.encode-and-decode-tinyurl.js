/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
/*
最基本的用随机数生成6位字符串，用两个map存入对应关系。
*/
let codeToUrl = new Map();
let urlToCode = new Map();
let baseUrl = "http://tinyurl.com/";
let charSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

var encode = function(longUrl) {
  if(urlToCode.has(longUrl)) {
     return urlToCode.get(longUrl);
  }
  let urlParam = "";
  for(let i = 0; i < 6; i++) {
    urlParam += charSet[Math.floor(Math.random() * charSet.length)];
  }
  
  urlToCode.set(longUrl, urlParam);
  codeToUrl.set(urlParam, longUrl);
  return baseUrl + urlParam;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  let param = shortUrl.substring(baseUrl.length);
  if(codeToUrl.has(param)) {
    return codeToUrl.get(param);
  }
  return "";
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */