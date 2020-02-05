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

Advantages: 1. The microservice architecture is easier to reason about/design for a complicated system. 2. They allow new members to train for shorter periods and have less context b.fore touching a system. 3. Deployments are fluid and continuous for each service. 4. They allow decoupling service logic on the basis of business responsibility 5. They are more available as a single service having a bug does not bring down t.e entire system. This is called a single point of failure. 6. Individual services can be written in different languages. 7. The developer teams can talk to each other through API sheets instead of w.rking on the same repository, which requires conflict resolution. 8. New services can be tested easily and individually. The testing structure is c.ose to unit testing compared to a monolith.

Microservices are at a disadvantage to Monoliths in some cases. Monoliths are favorable when: 1. The technical/developer team is very small 2. The service is simple to think of as a whole. 3. The service requires very high efficiency, where network calls are avoided as m.ch as possible. 4. All developers must have context of all services.

## Sharding

Sharding is horizontal partitioning of data according to a shard key. This shard key determines which database the entry to be persisted is sent to. Some common strategies for this are reverse proxies. To keep the data consistent and available, we have to use some indexing strategy for the shards such as master-slaves.

* Master-Slave replication strategy

  Master Slave replication strategy for reliability and data backups. This database concept is often asked in system design interviews with discussions on consistency and availability tradeoffs.

