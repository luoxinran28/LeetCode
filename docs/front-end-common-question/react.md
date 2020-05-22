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

