---
layout: post
title: PHP "memory_limit" and OpenX DreamHost One-Click Install
wordpress_id: 605
wordpress_url: http://danielmcormond.com/?p=605
date: 2011-03-16 14:31:35 -04:00
---

[DreamHost](http://www.dreamhost.com/r.cgi?467109) offers [OpenX](http://www.openx.org/) as a one-click install. Unfortunately, it wasn't entirely that easy for me.

The OpenX installer choked because the memory limit for PHP wasn't high enough for it's liking. The fix for this is pretty simple:

Make sure your domain is running PHP 5.3. Create the directory `~/.php/5.3/` and a file called `~/.php/5.3/phprc`

In your phprc, just add `memory_limit = 128M` to appease the cranky OpenX installer.

Run a `killall php53.cgi` to make PHP pick up your new settings, and retry the OpenX installer. It should work normally from there.
