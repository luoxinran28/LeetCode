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



