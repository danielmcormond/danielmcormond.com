--- 
layout: post
title: How To Use MongoDB and PHP 5.3 on DreamHost
wordpress_id: 551
wordpress_url: http://danielmcormond.com/?p=551
date: 2010-12-20 16:23:34 -05:00
---

_Updated July 2012. (Originally published in December 2010)._

Follow these instructions to get the [MongoDB PHP driver](https://github.com/mongodb/mongo-php-driver) working with PHP 5.3 on [DeamHost](http://www.dreamhost.com/r.cgi?467109).

> In your [DreamHost Panel](https://panel.dreamhost.com/index.cgi?tree=domain.manage&), make sure your domain is running PHP 5.3.
> If you're not sure which version to pick, choose `PHP 5.3.x FastCGI`

SSH to your server and download the latest MongoDB PHP driver:

`curl -L -o mongo-php-driver.tar.gz https://github.com/mongodb/mongo-php-driver/tarball/master`

Extract the source code:

`tar zxvf mongo-php-driver.tar.gz`

Change directories:

`cd mongodb-mongo-php-driver-*`

Run phpize using 5.3:

`phpize-5.3`

Configure using PHP 5.3:

`./configure --with-php-config=/usr/local/php53/bin/php-config`

Compile:

`make`

(You should now have a compiled `mongo.so` extension in the `modules/` folder.)

Create this directory:

`mkdir -p ~/.php/5.3`

Move your newly compiled module into that directory:

`mv modules/mongo.so ~/.php/5.3/`

Create a phprc file:

```
echo "extension = /home/`whoami`/.php/5.3/mongo.so" >> ~/.php/5.3/phprc
```

Restart your PHP process(es) to pickup the new directives in your phprc:

`killall php53.cgi`

You should now see the *mongo* extension listed when you run a `phpinfo()`.

Let me know how this works for you in the comments below!

> Note: These instructions work well for connecting to a hosted instance of MongoDB, [like MongoHQ](http://mongohq.com/). DreamHost terms of service prevent you from running your own MongoDB service on a shared hosting plan. In order to run a legit MongoDB server, you'll probably need to upgrade to a DreamHost VPS.
