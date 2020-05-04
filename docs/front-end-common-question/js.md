# JS

#### Explain event delegation

A technique to add event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM.

#### Explain how `this` works in JavaScript

[https://www.youtube.com/watch?time\_continue=685&v=zE9iro4r918&feature=emb\_logo](https://www.youtube.com/watch?time_continue=685&v=zE9iro4r918&feature=emb_logo)

1. If the `new` keyword is used when calling the function, `this` inside the function is a brand new object.
2. If `apply`, `call`, or `bind` are used to call/create a function, `this` inside the function is the object that is passed in as the argument.
3. If a function is called as a method, such as `obj.method()` — `this` is the object that the function is a property of.
4. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, `this` is the global object. In a browser, it is the `window` object. If in strict mode \(`'use strict'`\), `this` will be `undefined` instead of the global object.
5. If multiple of the above rules apply, the rule that is higher wins and will set the `this` value.
6. If the function is an ES2015 arrow function, it ignores all the rules above and receives the `this` value of its surrounding scope at the time it is created.

Reference: [https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/](https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/)

#### What's the difference between `.call` and `.apply`?

Both `.call` and `.apply` are used to invoke functions and the first parameter will be used as the value of `this` within the function. However, `.call` takes in comma-separated arguments as the next arguments while `.apply` takes in an array of arguments as the next argument. An easy way to remember this is C for `call` and comma-separated and A for `apply` and an array of arguments.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
```

#### Explain `Function.prototype.bind?`

 `.bind` is the exact same as `.call` but instead of immediately invoking the function, it’ll return a new function that you can invoke at a later time.

```javascript
function greet (l1, l2, l3) {
  alert(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  )
}

const user = {
  name: 'Tyler',
  age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

const newFn = greet.bind(user, languages[0], languages[1], languages[2])
newFn() // alerts "Hello, my name is Tyler and I know JavaScript, Ruby, and Python"
```

#### Explain how prototypal inheritance works

All JavaScript objects have a `__proto__` property, that is a reference to another object, which is called the object's "prototype". When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's `__proto__`, and the `__proto__`'s `__proto__` and so on, until it finds the property defined on one of the `__proto__`s or until it reaches the end of the prototype chain. This behavior simulates classical inheritance, but it is really more of [delegation than inheritance](https://davidwalsh.name/javascript-objects).

```javascript
if (typeof Object.create !== "function") {
  Object.create = function(parent) {
    function Tmp() {}
    Tmp.prototype = parent;
    return new Tmp();
  };
}

const Parent = function() {
  this.name = "Parent";
};

Parent.prototype.greet = function() {
  console.log("hello from Parent");
};

const child = Object.create(Parent.prototype);

child.cry = function() {
  console.log("waaaaaahhhh!");
};

child.cry();
// Outputs: waaaaaahhhh!

child.greet();
// Outputs: hello from Parent
```

#### Explain why the following doesn't work as an IIFE: `function foo(){ }();`. What needs to be changed to properly make it an IIFE?

IIFE stands for Immediately Invoked Function Expressions. The JavaScript parser reads `function foo(){ }();` as `function foo(){ }` and `();`, where the former is a _function declaration_ and the latter \(a pair of parentheses\) is an attempt at calling a function but there is no name specified, hence it throws `Uncaught SyntaxError: Unexpected token )`.

Here are two ways to fix it that involves adding more parentheses: `(function foo(){ })()` and `(function foo(){ }())`. Statements that begin with `function` are considered to be _function declarations_; by wrapping this function within `()`, it becomes a _function expression_ which can then be executed with the subsequent `()`. These functions are not exposed in the global scope and you can even omit its name if you do not need to reference itself within the body.

See more at: [https://lucybain.com/blog/2014/immediately-invoked-function-expression/](https://lucybain.com/blog/2014/immediately-invoked-function-expression/)

#### What's a typical use case for anonymous functions?

They can be used in IIFEs to encapsulate some code within a local scope so that variables declared in it do not leak to the global scope. 

As a callback that is used once and does not need to be used anywhere else. The code will seem more self-contained and readable when handlers are defined right inside the code calling them, rather than having to search elsewhere to find the function body.

```javascript
setTimeout(function() {
  console.log("Hello world!");
}, 1000);
```

#### What's the difference between a variable that is: `null`, `undefined` or undeclared? How would you go about checking for any of these states?

Undeclared variables will be defined globally, outside of the current scope. In strict mode, a `ReferenceError` will be thrown when you try to assign to an undeclared variable. Undeclared variables are bad just like how global variables are bad.

 A variable that is `undefined` is a variable that has been declared, but not assigned a value.

 A variable that is `null` will have been explicitly assigned to the `null` value. It represents no value and is different from `undefined` in the sense that it has been explicitly assigned.

#### What is a closure, and how/why would you use one?

Closures are functions that have access to the outer \(enclosing\) function's variables—scope chain even after the outer function has returned.

#### Difference between a `.forEach` loop and a `.map()` loop

**`forEach`**

* Iterates through the elements in an array.
* Executes a callback for each element.
* Does not return a value.

**`map`**

* Iterates through the elements in an array.
* "Maps" each element to a new element by calling the function on each element, creating a new array as a result.

#### How do you organize your code? \(module pattern, classical inheritance?\)

* Gitlab version control
* CSS preprocessors such as Sass
* Use Immediately Invoked Function Expressions to limit the scope of JS code. Use namespace to define the global functionalities. 
* Use jQuery UI to manage the plugins.

#### What's the difference between host objects and native objects?

Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as `String`, `Math`, `RegExp`, `Object`, `Function`, etc.

Host objects are provided by the runtime environment \(browser or Node\), such as `window`, `XMLHTTPRequest`, etc.

#### Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?

 `function Person(){}` is just a normal function declaration with PascalCase.

 `var person = Person()` invokes the `Person` as a function, and not as a constructor.

 `var person = new Person()` creates an instance of the `Person` object using the `new` operator,   which inherits from `Person.prototype`

#### When would you use `document.write()`?

`document.write()` writes a string of text to a document stream opened by `document.open()`. When `document.write()` is executed after the page has loaded, it will call `document.open` which clears the whole document \(`<head>` and `<body>` removed!\) and replaces the contents with the given parameter value. Hence it is usually considered dangerous and prone to misuse.

#### What's the difference between feature detection, feature inference, and using the UA string?

 **Feature Detection**

Feature detection involves working out whether a browser supports a certain block of code, and running different code depending on whether it does \(or doesn't\), so that the browser can always provide a working experience.

```javascript
if ("geolocation" in navigator) {
  // Can use navigator.geolocation
} else {
  // Handle lack of feature
}
```

**Feature Inference**  
Feature inference checks for a feature just like feature detection, but uses another function because it assumes it will also exist.

```javascript
if (document.getElementsByTagName) {
  element = document.getElementById(id);
}
```

This is a browser-reported string that allows the network protocol peers to identify the application type and  can be accessed via `navigator.userAgent.`

#### Explain Ajax in as much detail as possible.

Ajax \(asynchronous JavaScript and XML\) is a set of web development techniques to create asynchronous web applications. With Ajax, web applications can send data to and retrieve from a server asynchronously \(in the background\) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows for web pages, and by extension web applications, to change content dynamically without the need to reload the entire page.  In practice, modern implementations commonly substitute use JSON instead of XML, due to the advantages of JSON being native to JavaScript.

The `XMLHttpRequest` API is frequently used for the asynchronous communication or these days, the `fetch` API.

#### What are the advantages and disadvantages of using Ajax?

**Advantages**

* Better interactivity. New content from the server can be changed dynamically without the need to reload the entire page.
* Reduce connections to the server since scripts and stylesheets only have to be requested once.
* State can be maintained on a page. JavaScript variables and DOM state will persist because the main container page was not reloaded.

**Disadvantages**

* Dynamic webpages are harder to bookmark.
* Does not work if JavaScript has been disabled in the browser.
* Some webcrawlers do not execute JavaScript and would not see content that has been loaded by JavaScript.
* Webpages using Ajax to fetch data will likely have to combine the fetched remote data with client-side templates to update the DOM. For this to happen, JavaScript will have to be parsed and executed on the browser, and low-end mobile devices might struggle with this.

#### Explain how JSONP works

JSONP \(JSON with Padding\) is a method commonly used to bypass the cross-domain policies in web browsers works by making a request to a cross-origin domain via a `<script>` tag and usually with a `callback` query parameter, for example: `https://example.com?callback=printData`. The server will then wrap the data within a function called `printData` and return it to the client.

```javascript
<!-- https://mydomain.com -->
<script>
  function printData(data) {
    console.log(`My name is ${data.name}!`);
  }
</script>

<script src="https://example.com?callback=printData"></script>
```

```javascript
// File loaded from https://example.com?callback=printData
printData({ name: "Yang Shun" });
```

 The client has to have the `printData` function in its global scope and the function will be executed by the client when the response from the cross-origin domain is received.

**CORS vs JSONP**

CORS can be used as a modern alternative to the [JSONP](https://en.wikipedia.org/wiki/JSONP) pattern. The benefits of CORS are:

* While JSONP supports only the `GET` request method, CORS also supports other types of HTTP requests.
* CORS enables a web programmer to use regular [XMLHttpRequest](https://en.wikipedia.org/wiki/XMLHttpRequest), which supports better error handling than JSONP.
* While JSONP can cause [cross-site scripting \(XSS\)](https://en.wikipedia.org/wiki/Cross-site_scripting) issues when the external site is compromised, CORS allows websites to manually parse responses to increase security

**CORS**

The CORS standard works by adding new HTTP headers which allow servers to serve resources to permitted origin domains. Browsers support these headers and respect the restrictions they establish.

![](../.gitbook/assets/image%20%287%29.png)



**Example**: Say your site is [http://my-cool-site.com](http://my-cool-site.com/) and, you have a third party API at domain [http://third-party-site.com](http://third-party-site.com/), which you can access via AJAX.

And let's assume that a page you server from my-cool-site.com made a request to third-party-site.com. Normally, users browser will decline AJAX calls to any other site other than your own domain/subdomain per the [Same-Origin Security Policy](http://en.wikipedia.org/wiki/Same_origin_policy). But if the browser and the third party server supports CORS, the following things happen:

* Browser will send the following HTTP header to third-party-site.com: 

  `Origin: http://my-cool-site.com`

* If the third party server accepts requests from your domain, it will respond with the following HTTP header: ****

  `Access-Control-Allow-Origin: http://my-cool-site.com`

* To allow all domains, third party server can send this header: 

  `Access-Control-Allow-Origin: *`

* If your site is not allowed, browser will throw an error.

#### Explain the same-origin policy with regards to JavaScript.

The same-origin policy prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number.

#### Explain "hoisting".

Variables declared or initialized with the `var` keyword will have their declaration "moved" up to the top of their module/function-level scope.

#### Describe event bubbling.

When an event triggers on a DOM element, the event is bubbled up to its parent and the same thing happens.

#### What's the difference between an "attribute" and a "property"?

Attributes are defined on the HTML markup but properties are defined on the DOM.

```javascript
const input = document.querySelector("input");
console.log(input.getAttribute("value")); // "Hello"
console.log(input.value); // "Hello World!", after you change the value of the text field by adding "World!" to it
```

#### Why is extending built-in JavaScript objects not a good idea?

It is dangerous in practice which overwrites each other and your code will break.

#### Difference between document `load` event and document `DOMContentLoaded` event?

The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

`window`'s `load` event is only fired after the DOM and all dependent resources and assets have loaded.

#### What is `"use strict";`? What are the advantages and disadvantages to using it?

Advantages:

* Makes it impossible to accidentally create global variables.
* Makes assignments which would otherwise silently fail to throw an exception.
* Requires that function parameter names be unique.
* `this` is undefined in the global context.

Disadvantages:

* Concatenation of scripts written in different strict modes might cause issues.

#### Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

Collisions will likely occur. Use the module pattern \(IIFEs\) to encapsulate your variables within a local namespace.

#### Explain what a single page app \(SPA\) is and how to make one SEO-friendly.

Web developers these days refer to the products they build as web apps, rather than websites. While there is no strict difference between the two terms, web apps tend to be highly interactive and dynamic, allowing the user to perform actions and receive a response to their action. Traditionally, the browser receives HTML from the server and renders it. When the user navigates to another URL, a full-page refresh is required and the server sends fresh new HTML to the new page. This is called server-side rendering.

However, in modern SPAs, client-side rendering is used instead. The browser loads the initial page from the server, along with the scripts \(frameworks, libraries, app code\) and stylesheets required for the whole app. When the user navigates to other pages, a page refresh is not triggered. The URL of the page is updated via the [HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). New data required for the new page, usually in JSON format, is retrieved by the browser via [AJAX](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) requests to the server. The SPA then dynamically updates the page with the data via JavaScript, which it has already downloaded in the initial page load. This model is similar to how native mobile apps work.

The benefits:

* The app feels more responsive and users do not see the flash between page navigations due to full-page refreshes.
* Fewer HTTP requests are made to the server, as the same assets do not have to be downloaded again for each page load.
* Clear separation of the concerns between the client and the server; you can easily build new clients for different platforms \(e.g. mobile, chatbots, smart watches\) without having to modify the server code. You can also modify the technology stack on the client and server independently, as long as the API contract is not broken.

The downsides:

* Heavier initial page load due to the loading of framework, app code, and assets required for multiple pages.
* There's an additional step to be done on your server which is to configure it to route all requests to a single entry point and allow client-side routing to take over from there.
* The search engines may see empty content on your page. This hurts the Search Engine Optimization \(SEO\) of your app. To overcome this, you can either server-side render your app or use services such as [Prerender](https://prerender.io/) to "render your javascript in a browser, save the static HTML, and return that to the crawlers".

#### What is the extent of your experience with Promises?

A promise represents the **future result of an asynchronous operation**. A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

**Pros**

* Avoid callback hell which can be unreadable.
* Makes it easy to write sequential asynchronous code that is readable with `.then()`.
* Better tracking the chain functions errors by using catch than the usual try\(\) block.
* Makes it easy to write parallel asynchronous code with `Promise.all()`.
* With promises, these scenarios which are present in callbacks-only coding, will not happen:
  * Call the callback too early
  * Call the callback too late \(or never\)
  * Call the callback too few or too many times
  * Fail to pass along any necessary environment/parameters
  * Swallow any errors/exceptions that may happen

**Cons**

* In older browsers where ES2015 is not supported, you need to load a polyfill in order to use it.

#### What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript? Such as TypeScript

Advantages:

* Enables you to write shorter code, by providing some syntactic sugar.
* Static types are awesome for large projects that need to be maintained over time.

Disadvantages:

* Pre-compiled process
* Most developers are not familiar with these languages and will need to learn it.
* Developers should be cognizant of what their code is being compiled to.

#### Explain the difference between mutable and immutable objects.

Mutable = changeable after it's created. Some built-in immutable JavaScript objects are `Math`, `Date, Numbers`.

#### Explain the difference between synchronous and asynchronous functions.

Synchronous functions are blocking while asynchronous functions are not.

#### What is event loop? What is the difference between call stack and task queue?

The event loop is a single-threaded loop that monitors the call stack and checks if there is any work to be done in the task queue. If the call stack is empty and there are callback functions in the task queue, a function is dequeued and pushed onto the call stack to be executed.

Ref: [https://www.youtube.com/watch?time\_continue=21&v=8aGhZQkoFbQ&feature=emb\_logo](https://www.youtube.com/watch?time_continue=21&v=8aGhZQkoFbQ&feature=emb_logo)

#### Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`

The former is a function declaration while the latter is a function expression. The key difference is that function declarations have its body hoisted but the bodies of function expressions are not \(they have the same hoisting behavior as variables\).

**Function Declaration**

```javascript
foo(); // 'FOOOOO'
function foo() {
  console.log("FOOOOO");
}
```

**Function Expression**

```javascript
foo(); // Uncaught TypeError: foo is not a function
var foo = function() {
  console.log("FOOOOO");
};
```

#### What advantage is there for using the arrow syntax for a method in a constructor?

The value of `this` gets set at the time of the function creation and can't change after that.

#### How can you share code between files?

 On the client \(browser environment\), as long as the variables/functions are declared in the global scope \(`window`\), all scripts can refer to them.

On the server \(Node.js\), the common way has been to use CommonJS  by attaching them to the `module.exports` object.

ES2015 defines a module syntax which aims to replace both AMD and CommonJS.

#### Why you might want to create static class members?

Static properties are typically configuration variables and static methods are usually pure utility functions which do not depend on the state of the instance.

