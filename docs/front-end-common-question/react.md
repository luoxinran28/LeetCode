# React

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

Life cycle of React rendering

