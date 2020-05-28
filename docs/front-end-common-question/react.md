# React/Redux

使用npx create-react-app创建一个基本的react程序。

下面是一个最基本的jsx格式，这里的this要注意，在method里面由于是strict的模式，指向的是undef，所以一般我们用匿名的arrow function来定义component的函数从而得到this：

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['1', '2','3']
  }

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  formatCount() { 
    const { count } = this.state;
    return count === 0 ? <h1>"Zero"</h1> : count;
  }
  
  getBadgeClasses() { 
    return "badge badge-primary m-2";
  }

  // 两种方式，一个是obj调用的方法，this返回obj的引用，另一个是函数声明，this，在strict模式下
  // 指向undefined，非strict指向window，所以我们要constructor中用super指向父类，
  // 在bind里面绑定this到这个函数中
  // 1. obj.method();
  // 2. function();
  handleIncrement() { 
    console.log("click");
    // this.state.count++; // 注意这里的this是被调用的，但是this.state不能被访问
    this.setState({ count: this.state.count + 1 }); // this.setState 继承于 Component
  }


  render() { // 每隔一段时间render都会被异步调用，react会比较旧的virtual dom 和新的 virtual dom然后更新被更改的地方
    return <React.Fragment>
      <h1>Hello Word</h1><p>Discription</p>
      <button onClick={this.handleIncrement}>Increase</button>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <ul>
        {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
    </React.Fragment>;
  }


}
 
export default Counter;
```

如果需要向listener传参数，onClick只接受一个函数的引用而不能接受参数，可以多调用一层函数来处理：

```jsx
import React, { Component } from 'react';

class Counter extends Component {

  ......

  handleIncrement = (product) => { 
    console.log("click: ", product.id);
    this.setState({ count: this.state.count + 1 }); // this.setState 继承于 Component
  }

  doHandleIncrement = () => { 
    this.handleIncrement({id: 1});
  }

  render() { // 每隔一段时间render都会被异步调用，react会比较旧的virtual dom 和新的 virtual dom然后更新被更改的地方
    return <React.Fragment>
      <h1>Hello Word</h1><p>Discription</p>
      <button onClick={this.doHandleIncrement}>Increase</button>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <ul>
        {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
    </React.Fragment>;
  }


}
 
export default Counter;
```

**组件间数据传输this.state v.s. this.props:**

this.state是在component里面的，数据是private的，其他组件无法获取。this.props可以从上一层的component里面获取传下来的数据。如果下一层组件需要操作上一层组件的函数，比如handleDelete\(\)，可以把这个函数的引用通过onDelete传入到下一层组件，下一层组件中的button来调取this.props.onDelete来触发这个函数。



Design Patterns:

* Container / View Patterns: 一个view component只负责view的作用，另一个component负责controller的作用，比如在componentDidMount里面发送fetch请求，在这个component里面render需要渲染的view component
* Render Props: A component that takes as a prop a function that returns a Component, and calls it with the intended parameters。将子孙的component都看做是functions
* Context Api Pattern: 当我们要穿props给子类的时候，可能要传得非常深，毕竟很多子孙并不会用到所需要的props，这时候可以使用Provider和Consumer的模式来解决 ，将results放到Context里面，使用Higher Order Components或者Render Props
* Css-in-js Pattern: inline css within the component won't pollute other components.

**Why can't you update state directly without setState\(\)?**

setState每次在re-render组件的时候都会被调用，首先会copy一个state，然后更改，然后再覆盖原来的state，直接更改state不能做到在重新渲染的时候更改state。

**What is Fragments and why do we use it?**

每次调用render函数的时候，我们只能return一个child，如果用一个&lt;div&gt;来wrap所有的child，component多了之后会有很多的div生成影响性能

**How to do code-splitting in react?**

Lazy-loading \(Dynamic Importing\) the component into the multiple bundles。

**Explain Virtual Dom?**

To update dom, we should update it faster and as less as possible because it's too expensive. React has its own dom tree which creates, it updates the states and props, and compare and change the modified dom only.

Life cycle of React rendering:

参考：[https://www.w3schools.com/react/react\_lifecycle.asp](https://www.w3schools.com/react/react_lifecycle.asp)

* Mount: putting elements into the virtual DOM
  * constructor: we can setup the initial state here.
  * render: the children will be rendered recursively.
  * componentDidMount: called after dom is rendered.
* Update: compare and update the modified dom
  * render: re-render the HTML to the DOM, with the new changes.
  * componentDidUpdate: called after the component is updated in the DOM. It accepts prevProps and prevState parameters.
* Unmount: when a component is removed from the DOM
  * componentWillUnmount: called before the remove.

**{} v.s. {{}}**

React doesn't use template html, it's just JS. So unlike Angular or Vue, it use {}.

**Functional \(stateless\) v.s. class-based \(stateful\) Components**

![](../.gitbook/assets/image%20%2819%29.png)

## **What is Redux?**

1. 概念：Centralize the components state in an application. 2. Makes the data flow transparent and predictable. 3. Preserve the state
2. Reducer: 在函数式变成里面，我们不应该去mutate改变状态state，所以我们用一个reducer函数来改变store，它接收一个现在的store，返回一个更新后的store。为了知道要更新store里面的什么状态，我们有了一个action来判断更改什么。相当于Event Handler。
3. Store：一个JS的Object用来包含现有的状态state。
4. Action：一个JS的Object来表示刚才发生了什么事，通过dispatch给store，store又转手传给reducer，然后在store里面调用reducer去执行。相当于Event

Action -&gt; Store -&gt; Reducer这样的架构能够更好让人去追踪记录会有什么样的action将要去改变state，甚至可以更好的做undo和redo了。

**Functional Programming example:**

```jsx
const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const wrap = type => str => `<${type}>${str}</${type}>`; // Curry style

const result = wrap("div")(toLowerCase(trim("js learning")));
```

**What's pure functions?**

* No random values
* No current date/time
* No global state \(DOM, files, db, etc\)
* No mutation of parameter

It's self-documented, easy to test, concurrent, and cacheable. 给同样参数去不断调用，一直返回同样的结果。

**Immutability:**

JS 因为是pass-by-reference，所以很难做到Immutability，但可以通过deep copy object来做到不变性，但会损耗内存。

```jsx
const person = {
    name: "Joe",
    address: {
        country: "USA",
        city: "Salt Lake City"
    }
}

// const updated = Object.assign({}, person, {name: "Doe"});
const updated = {...person, name: "Doe"};
updated.address.city = "New York";
console.log(person); // Here the address is changed because the copy 
// only takes the first level. For deep copy:
const updated = {
    ...person,
    address: {
        ...person.address, // Deep copy here
        city: "New York"
    },
    name: "Doe"
};
```

React Actions:

```jsx
{
    type: "bugAdded",
    payload: {
        id: 1,
        description: ""
    }
}
```

Reducer:

```jsx
export default function reducer(state = [], action) {
    switch(action.type) {
        case "bugAdded": 
            return [
                ...state,
                { // 只需要包含最少的信息
                    id: ++lastId,
                    desction: action.payload.description,
                    resolved: false
                }
            ];
        case "bugRemoved":
            return state.filter(but => bug.id !== action.payload.id);
        default:
            return state;
    }
}
```

Create Store:

```jsx
import { createStore } from 'redux';
import reducer from './reducer';

const store createStore(reducer); // High order function: take fn as arguments

export default store;
```

The use of store:

```jsx
import store from "./store";

const unsubscribe = store.subscribe(() => {
    
}); // Will be called once the state is changed

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug1"
    }
});

unsubscribe();

store.dispatch({
    type: "bugRemoved",
    payload: {
        id: "1",
        description: "Bug1"
    }
});

console.log(store.getState());
```

**Build Redux from Scratch:**

首先学习怎么让function变成私有private的，就是用get函数将内部成员数值返回，然后返回需要public的函数引用。

```jsx
/* File: reducer.js */
export default reducer = (state = [], action) => {
    switch(action.type) {
        case "bugAdded": 
            return [
                ...state,
                { // 只需要包含最少的信息
                    id: ++lastId,
                    desction: action.payload.description,
                    resolved: false
                }
            ];
        case "bugRemoved":
            return state.filter(bug => bug.id !== action.payload.id);
        default:
            return state;
    }
}

/* File: customStore.js */
import { reducer } from "./reducer";

export default function createStore(reducer) {
    let state;
    let listeners = []; // 需要监听当state改变了之后，我们再调用subscribe()
    
    function getState() {
        return state;
    }
    
    function dispatch(action) {
        state = reducer(state, action);
        for(let i = 0; i < listeners.lenght; i++) {
            listeners[i](); // dispath之后再执行subscribe了的函数
        }
    }
    
    function subscribe(listener) {
        listeners.push(listener);
    }
    
    return {
        subscribe,
        dispatch,
        getState
    };
}



/* File: index.js */
import store from "./customStore";
console.log(store); // 这里指挥显示getState的引用
import * as actions from "./actions";

store.dispatch(actionCreators.bugAdded("Bug 1"));
```

使用Ducks Pattern设计模式将上面代码合并到一个文件./bugs.js里，使用redux/toolkit简化代码：

```jsx
/* File: bugs.js */
import { createAction } from "@reduxjs/toolkit";


export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

let lastId = 0;

export default createReducer([], {
    [bugAdded.type]: (bugs, action) => {
        bugs.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        });
    },
    [bugUpdated.type]: (bugs, action) => state.filter(bug => bug.id !== action.payload.id),
    [bugResolved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id);
        state[index].resolved = true;
    }
});


/* File: configureStore.js */
import { configureStore } from "@reduxjs/toolkit"; 
import { reducer } from "./bugs.js";

export default function createStore(reducer) {
    return configureStore({ reducer });
}



/* File: index.js */
import store from "./configureStore";
import * as actions from "./actions";

store.dispatch(actionCreators.bugAdded("Bug 1"));
```



