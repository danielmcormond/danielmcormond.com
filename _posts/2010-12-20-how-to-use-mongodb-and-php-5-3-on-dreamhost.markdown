--- 
layout: post
title: How To Use MongoDB and PHP 5.3 on DreamHost
wordpress_id: 551
wordpress_url: http://danielmcormond.com/?p=551
date: 2010-12-20 16:23:34 -05:00
---
[Phillip Napieralski](http://blog.pnapieralski.com/) wrote a helpful post about [How to Setup MongoDB PHP Extension on Shared Hosting](http://blog.pnapieralski.com/mongodb/how-to-setup-mongodb-php-extension-on-shared-hosting/) earlier this year.

Here are some more specific details about how to get the [MongoDB](http://www.mongodb.org/) driver working with PHP 5.3 on [DeamHost](http://www.dreamhost.com/r.cgi?467109).

First, make sure the PHP mode for your domain is set to *PHP 5.3 FastCGI* in your DreamHost Web Panel.

SSH to your server and download the latest MongoDB PHP driver:

`wget http://download.github.com/mongodb-mongo-php-driver-1.1.0-0-g6eab09c.tar.gz`

Extract the source code:

`tar zxvf mongodb-mongo-php-driver-1.1.0-0-g6eab09c.tar.gz`

Change directories:

`cd mongodb-mongo-php-driver-b177907`

Run phpize using 5.3:

`phpize-5.3`

Configure using PHP 5.3

`./configure --with-php-config=/usr/local/php53/bin/php-config`

Compile:

`make`

You should now have a compiled *mongo.so* extension in the *modules/* folder.

Setup your domain(s) to use a custom php.ini file [following DreamHost's instructions here](http://wiki.dreamhost.com/PHP.ini).

When you're creating your script wrapper, make sure you use the PHP 5.3 executable. My php-wrapper.fcgi looks like this:

`#!/bin/sh
exec /dh/cgi-system/php53.cgi $*`

Finally, add the following lines to your custom php.ini

`extension_dir = "/full/path/to/your/mongodb-mongo-php-driver-b177907/modules"
extension = mongo.so`

Obviously, replace the path above to match the full path to your *modules/* directory. You should now see the *mongo* extension listed when you run a *phpinfo()*.

Let me know how this works for you in the comments below!

Note: These instructions work well for connecting to a hosted instance of MongoDB, [like MongoHQ](http://mongohq.com/). DreamHost terms of service prevent you from running your own MongoDB service on a shared hosting plan. In order to run a legitimate MongoDB server, you'll probably need to upgrade to a DreamHost VPS.
