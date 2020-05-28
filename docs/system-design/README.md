# System Design

## Load Balancer:

It balances the data to the multiple servers. Algorithm: round robin, random pick, least connections. One load balancer / Server / DB can cause the overloaded or one point failure problem.

## How to scale the servers

* Vertical scaling Increase the performance of a single server
* Horizontal scaling
* multiple servers. what if a server die? to determine that, ping or heartbeat.
* store the session in the cookie and saved into DB or file system. Can be pretended as another user or hacked.

## How to scale the database

* Vertical scaling partition the columns on different servers
* Horizontal scaling partition to the different tables. Flight -&gt; international flights and domestic flights.

## Database Replication

* single primary replication one primary DB update the data to other DBs which are write-only. Could cause the race condition. Good for reading not writing \(blog, news website\).
* multiple primary replication Different DBs can read and write to each of them. Complicated. Update each other \(same primary key problem\) write conflicts.

## Caching

* Client-side Save the old JS Account info like username. Cache-Control: max-age=86400 \(max amount of time\). Compare Etag to match the latest resources on the server. If it doesn’t match, send the new content.
* Server-side Save the complex query that commonly used. Consistency between server and cache. External cache: more space. Internal cache: physical on the server.

## Microservices

Miscroservice is a single business unit. It has a great benefit for horizontal scalability.

Advantages: 1. The microservice architecture is easier to reason about/design for a complicated system. 2. They allow new members to train for shorter periods and have less context b.fore touching a system. 3. Deployments are fluid and continuous for each service. 4. They allow decoupling service logic on the basis of business responsibility 5. They are more available as a single service having a bug does not bring down t.e entire system. This is called a single point of failure. 6. Individual services can be written in different languages. 7. The developer teams can talk to each other through API sheets instead of working on the same repository, which requires conflict resolution. 8. New services can be tested easily and individually. The testing structure is close to unit testing compared to a monolith.

Microservices are at a disadvantage to Monoliths in some cases. Monoliths are favorable when: 1. The technical/developer team is very small 2. The service is simple to think of as a whole. 3. The service requires very high efficiency, where network calls are avoided as m.ch as possible. 4. All developers must have context of all services.

## Sharding

Sharding is horizontal partitioning of data according to a shard key. This shard key determines which database the entry to be persisted is sent to. Some common strategies for this are reverse proxies. To keep the data consistent and available, we have to use some indexing strategy for the shards such as master-slaves.

* Master-Slave replication strategy

  Master Slave replication strategy for reliability and data backups. This database concept is often asked in system design interviews with discussions on consistency and availability tradeoffs.

## 设计Youtube:

![](../.gitbook/assets/image%20%2818%29.png)

**功能性需求：**

* 能够上传视频（写）
* 观看视频（读）
* 点击like/dislike，评论（写）
* 搜索视频
* 推荐视频

**非功能性需求：**

* 有效性，要看的到视频
* 可靠性，保证能观看完整视频以及评论，观看时要实时
* 一致性，多端要能看到统一视频，但不用实时

**容量：**

如上图

**流程：**

首先前端发送请求到web服务器，web服务器通过负载均衡器找到对应的app服务器去进行相应的数据库操作，负载均衡器可以使用随机，最少使用或者哈希一致性等算法。在web服务器这里，需要最基本的读写服务，读可以从读服务器直接读取视频信息以及视频所在的文件服务器，但在读服务器之前，可以先从cache里面找是否已经有需要的信息，cache常见用类似LRU的算法。写要通过fan out将不同服务写到相应服务上面，比如视频标题或者tag信息写到搜索服务，主题等写到推荐服务，视频用户信息写到用户图服务上面，然后将视频信息放到视频对象数据库中。

视频作为文件和图片一样，不应该直接放到数据库中，而是要放到文件仓库里，因为读比写多很多，大部分用户都是看视频，所以需要经典master-slave的服务器架构，写在master上面，slave拷贝一个读服务器用于读，master和slave经常要互换，但如果写入数据量很大，特别是视频服务的话，一个写进程可能占用很久，容易造成阻塞，所以我们需要另外开辟一个异步的写服务，在写到文件服务器以前加一个消息队列，用来排队写服务。这样因为读写分离可能会造成一点时效性的缺失，并不能马上看到上传的视频，但是保证了可靠性和一致性。

## 分布式系统设计

[https://juejin.im/post/5ab898b9518825188038eca3](https://juejin.im/post/5ab898b9518825188038eca3)

### 一、谈谈业务中使用分布式的场景

分布式主要是为了提供可扩展性以及高可用性，业务中使用分布式的场景主要有分布式存储以及分布式计算。

分布式存储中可以将数据分片到多个节点上，不仅可以提高性能（可扩展性），同时也可以使用多个节点对同一份数据进行备份。

至于分布式计算，就是将一个大的计算任务分解成小任务分配到多台节点上去执行，再汇总每个小任务的执行结果得到最终结果。MapReduce 是分布式计算的最好例子。

### 二、分布式事务

指事务的操作位于不同的节点上，需要保证事务的 AICD 特性。

产生原因

* 数据库分库分表；
* SOA 架构，比如一个电商网站将订单业务和库存业务分离出来放到不同的节点上。

应用场景

* 下单：减少库存、更新订单状态。库存和订单不在不同一个数据库，因此涉及分布式事务。
* 支付：买家账户扣款、卖家账户入账。买家和卖家账户信息不在同一个数据库，因此涉及分布式事务。

解决方案

消息中间件也可称作消息系统 \(Message Queue\)，它本质上是一个暂存转发消息的一个中间件。在分布式应用当中，我们可以把一个业务操作转换成一个消息，比如支付宝的余额转入余额宝操作，支付宝系统执行减少余额操作之后向消息系统发送一个消息，余额宝系统订阅这条消息然后进行增加余额宝操作。

（一）消息处理模型

点对点

![](../.gitbook/assets/image%20%2821%29.png)

发布/订阅

![](../.gitbook/assets/image%20%2822%29.png)

（二）消息的可靠性

消息的发送端的可靠性：发送端完成操作后一定能将消息成功发送到消息系统。

消息的接收端的可靠性：接收端仅且能够从消息中间件成功消费一次消息。

发送端的可靠性

在本地数据建一张消息表，将消息数据与业务数据保存在同一数据库实例里，这样就可以利用本地数据库的事务机制。事务提交成功后，将消息表中的消息转移到消息中间件，若转移消息成功则删除消息表中的数据，否则继续重传。

接收端的可靠性

保证接收端处理消息的业务逻辑具有幂等性：只要具有幂等性，那么消费多少次消息，最后处理的结果都是一样的。

保证消息具有唯一编号，并使用一张日志表来记录已经消费的消息编号。

### 三、分布式锁

Java 提供了两种内置的锁的实现，一种是由 JVM 实现的 synchronized 和 JDK 提供的 Lock，当你的应用是单机或者说单进程应用时，可以使用 synchronized 或 Lock 来实现锁。当应用涉及到多机、多进程共同完成时，那么这时候就需要一个全局锁来实现多个进程之间的同步。

使用场景

例如一个应用有手机 APP 端和 Web 端，如果在两个客户端同时进行一项操作时，那么就会导致这项操作重复进行。

实现方式

1. 数据库分布式锁

（一）基于 MySQL 锁表

该实现方式完全依靠数据库唯一索引来实现。当想要获得锁时，就向数据库中插入一条记录，释放锁时就删除这条记录。如果记录具有唯一索引，就不会同时插入同一条记录。这种方式存在以下几个问题：

1. 锁没有失效时间，解锁失败会导致死锁，其他线程无法再获得锁。
2. 只能是非阻塞锁，插入失败直接就报错了，无法重试。
3. 不可重入，同一线程在没有释放锁之前无法再获得锁。

（二）采用乐观锁增加版本号

根据版本号来判断更新之前有没有其他线程更新过，如果被更新过，则获取锁失败。

### 四、分布式 Session

如果不做任何处理的话，用户将出现频繁登录的现象，比如集群中存在 A、B 两台服务器，用户在第一次访问网站时，Nginx 通过其负载均衡机制将用户请求转发到 A 服务器，这时 A 服务器就会给用户创建一个 Session。当用户第二次发送请求时，Nginx 将其负载均衡到 B 服务器，而这时候 B 服务器并不存在 Session，所以就会将用户踢到登录页面。这将大大降低用户体验度，导致用户的流失，这种情况是项目绝不应该出现的。

#### 1. 粘性 Session

原理

粘性 Session 是指将用户锁定到某一个服务器上，比如上面说的例子，用户第一次请求时，负载均衡器将用户的请求转发到了 A 服务器上，如果负载均衡器设置了粘性 Session 的话，那么用户以后的每次请求都会转发到 A 服务器上，相当于把用户和 A 服务器粘到了一块，这就是粘性 Session 机制。

优点

简单，不需要对 Session 做任何处理。

缺点

缺乏容错性，如果当前访问的服务器发生故障，用户被转移到第二个服务器上时，他的 Session 信息都将失效。

适用场景

* 发生故障对客户产生的影响较小；
* 服务器发生故障是低概率事件。

#### 2.Session 共享机制

使用分布式缓存方案比如 Memcached、Redis，但是要求 Memcached 或 Redis 必须是集群。

#### 3. Session 持久化到数据库

原理

拿出一个数据库，专门用来存储 Session 信息。保证 Session 的持久化。

优点

服务器出现问题，Session 不会丢失

缺点

如果网站的访问量很大，把 Session 存储到数据库中，会对数据库造成很大压力，还需要增加额外的开销维护数据库。

## 五、分库与分表带来的分布式困境与应对之策 作者：戎码益深

![](../.gitbook/assets/image%20%2820%29.png)

使用汇总表。

ID 唯一性

* 使用全局唯一 ID：GUID；
* 为每个分片指定一个 ID 范围。





