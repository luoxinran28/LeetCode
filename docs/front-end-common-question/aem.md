# AEM

AEM is a cloud based client-server system for building enterprise grade websites and applications.  The installation of AEM usually involve two instances running on separate machines on a production site. They are the _**author**_ and the _**publish**_ instances.  When content is published, it is replicated to the **publish** instance from author instance.

To enable websites to perform faster, AEM allows as to have what we call a **dispatcher**. It handles caching of web pages and load balancing. Having web pages cached means that we can get them quicker \(they are static so can be served quicker\). This speeds up performance on our site. Having a dispatcher means when end users come to your site, they first hit the dispatcher first, which serves them cached content. 

![](../.gitbook/assets/image%20%2810%29.png)

