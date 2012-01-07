--- 
layout: post
title: How To Use MongoDB and PHP 5.3 on DreamHost
wordpress_id: 551
wordpress_url: http://danielmcormond.com/?p=551
date: 2010-12-20 16:23:34 -05:00
---
<a href="http://blog.pnapieralski.com/">Phillip Napieralski</a> wrote a helpful post about <a href="http://blog.pnapieralski.com/mongodb/how-to-setup-mongodb-php-extension-on-shared-hosting/">How to Setup MongoDB PHP Extension on Shared Hosting</a> earlier this year.

Here are some more specific details about how to get the <a href="http://www.mongodb.org/">MongoDB</a> driver working with PHP 5.3 on <a href="http://www.dreamhost.com/r.cgi?467109">DreamHost</a>.

First, make sure the PHP mode for your domain is set to <em>PHP 5.3 FastCGI</em> in your DreamHost Web Panel.

SSH to your server and download the latest MongoDB PHP driver:

<code>wget http://download.github.com/mongodb-mongo-php-driver-1.1.0-0-g6eab09c.tar.gz</code>

Extract the source code:

<code>tar zxvf mongodb-mongo-php-driver-1.1.0-0-g6eab09c.tar.gz</code>

Change directories:

<code>cd mongodb-mongo-php-driver-b177907</code>

Run phpize using 5.3:

<code>phpize-5.3</code>

Configure using PHP 5.3

<code>./configure --with-php-config=/usr/local/php53/bin/php-config</code>

Compile:

<code>make</code>

You should now have a compiled <em>mongo.so</em> extension in the <em>modules/</em> folder.

Setup your domain(s) to use a custom php.ini file <a href="http://wiki.dreamhost.com/PHP.ini">following DreamHost's instructions here</a>.

When you're creating your script wrapper, make sure you use the PHP 5.3 executable. My php-wrapper.fcgi looks like this:

<code>#!/bin/sh
exec /dh/cgi-system/php53.cgi $*</code>

Finally, add the following lines to your custom php.ini

<code>extension_dir = "/full/path/to/your/mongodb-mongo-php-driver-b177907/modules"
extension = mongo.so</code>

Obviously, replace the path above to match the full path to your <em>modules/</em> directory. You should now see the <em>mongo</em> extension listed when you run a <em>phpinfo()</em>.

Let me know how this works for you in the comments below!

Note: These instructions work well for connecting to a hosted instance of MongoDB, <a href="http://mongohq.com/">like MongoHQ</a>. DreamHost terms of service prevent you from running your own MongoDB service on a shared hosting plan. In order to run a legitimate MongoDB server, you'll probably need to upgrade to a DreamHost VPS.
