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

![](../.gitbook/assets/image%20%2814%29.png)

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

视频作为文件和图片一样，不应该直接放到数据库中，而是要放到文件仓库里，因为读比写多很多，大部分用户都是看视频，所以需要经典master-slave的服务器架构，写在master上面，slave拷贝一个读服务器用于读，master和slave经常要互换，但如果写入数据量很大，特别是视频服务的话，一个写进程可能占用很久，容易造成阻塞，所以我们需要另外开辟一个异步的写服务，在写到文件服务器以前加一个消息队列，用来排队写服务。这样因为读写分离可能会造成一点时效性的确实，并不能马上看到上传的视频，但是保证了可靠性和一致性。

