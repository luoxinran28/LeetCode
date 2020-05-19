# Principles

**Single responsibility principle 单一责任**

一个类应该有且只有一个改变他的理由，这个类只有一个工作。

![](../.gitbook/assets/image%20%284%29.png)

**Open close principle 开放封闭**

对象或实体应该对扩展开放，对修改封闭。

![](../.gitbook/assets/image%20%288%29.png)

**Liskov substitution principle 里氏柯夫替换**

任何一个子类或者派生类可以替换他们的基类或者父类。例子：假设有一个接口Human，其他的子类都是Asian, African American, etc. 突然来了一个Robot，这时候就不应该继承与Human了。

**Interface segregation principle 接口分离**

不应该强迫一个类使用它用不上的接口，下面例子Rectangle是没法计算体积的。

![](../.gitbook/assets/image%20%286%29.png)

**Dependency inversion principle**

抽象不应该依赖具体实现，具体实现应该依赖于**抽象\(interface\)**，high-level的实体不应该依赖于low-level的实体。



**5C解题法：**

![](../.gitbook/assets/image%20%285%29.png)

Clarify: 比如电梯系统，有没主客梯，客梯会不会到负层，判断超重，按钮是同时控制两种电梯吗等等问题。

Core Objects: 写出主体class，一般就是你要做的Elevator。

Cases:

Classes:

Correctness:





