--- 
layout: post
title: How To Embed Widescreen YouTube Video
wordpress_id: 39
wordpress_url: http://danielmcormond.com/?p=39
date: 2008-11-25 12:02:41 -05:00
---

{.update} Update: YouTube now allows you to select dimensions when customizing embed code.  
Simply click the _Customize_ icon next to the embed code, and select the size you want: the embed code will be updated to match!

YouTube [recently announced a change](http://www.youtube.com/blog?entry=0i22UDAOfj8) that modifies their video player to a widescreen format. Unfortunately, the default code provided for embedding videos still defaults to a 4:3 size (450x355). It's easy to modify the dimensions to match the player on YouTube.

In the embed code provided, change the the width parameters to **640**, and height parameters to **385**.


{% highlight html %}
<object width="640" height="385">
	<param name="movie" value="http://www.youtube.com/v/rs-jAImScms&hl=en&fs=1&rel=0"></param>
	<param name="allowFullScreen" value="true"></param>
	<param name="allowscriptaccess" value="always"></param>
	<embed src="http://www.youtube.com/v/rs-jAImScms&hl=en&fs=1&rel=0"
			type="application/x-shockwave-flash"
			allowscriptaccess="always"
			allowfullscreen="true"
			width="640"
			height="385">
	</embed>
</object>
{% endhighlight %}

Make sure to change the dimensions in both places. Hopefully YouTube will update the options for customizing their embed code to do this automatically. For now, it's easy enough to edit by hand.

> Note: For those that wish to keep the original width of the YouTube player with a widescreen format, use a width of **450** and a height of **271**. This might be useful for sites that were designed around the original player width.
