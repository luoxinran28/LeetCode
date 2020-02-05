# Design Netflix

最基本的SNAKE原则是应用场景Scenario，限制性条件 Necessary，设计应用Application，数据存储结构Kilobit，扩展Evolve。

## Scenario:

枚举可能的场景，分类电影，挑选电影，播放电影，推荐电影等等。这里最重要的就是能播放电影，不然网站就没有什么用处。

## Necessary：

### QPS:

假设Netflix有10,000,000日活用户DAU，平均在线时长是1.5小时。

平均并发用户Average Concurrent Users = 日活用户 / 每日描述 \* 平均在线时长 = 10,000,000 / \(24 \* 60 \* 60\) \* \(90 \* 60\) = 0.625M 

Peak Concurrent Users = 0.625M \* 3 = 1.875M

Peak Concurrent Users after 1 year = 1.875M \* 2 = 3.75M

假设我们平时看视频的流量是30mbps

The top traffic after 1 year = 3.75M \* 10mpbs = 37.5Pb/s

### Storage:

假设单个用户使用内存约为20KB，一年后需要的总内存 = 10,000,000 \* 2 \* 20k = 400GB。

电影数量为20,000，平均每部电影100GB，所以总硬盘 = 100GB \* 20,000 = 2PB。

## Application:

![](../.gitbook/assets/image.png)

## Kilobit:

存储用户信息，由于需要经常修改和查找，并且要保证一致性，我们可以选用MySQL；频道信息添加操作比较频繁，可以使用MongoDB；而电影只需要用保存文件就可以，不需要使用数据库。

## Evolve:

对基本设计进行优化，我们有三个方向可以考虑：更好，例如如何满足更多用户量，如何更鲁棒；更广，例如设计更多应用场景，增加更多功能；更深，考虑更多细节。



## 设计Feature：设计一个推荐模块



