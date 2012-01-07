--- 
layout: post
title: How To Embed Widescreen YouTube Video
wordpress_id: 39
wordpress_url: http://danielmcormond.com/?p=39
date: 2008-11-25 12:02:41 -05:00
---

<script type="text/javascript"><!--
google_ad_client = "pub-7759078168443992";
/* 468x60, created 9/1/09 */
google_ad_slot = "3952070927";
google_ad_width = 468;
google_ad_height = 60;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>

UPDATE: YouTube now allows you to select dimensions when customizing embed code. Simply click the <em>Customize</em> icon next to the embed code, and select the size you want- the embed code will be updated to match!

YouTube <a href="http://www.youtube.com/blog?entry=0i22UDAOfj8">recently announced a change</a> that modifies their video player to a widescreen format. Unfortunately, the default code provided for embedding videos still defaults to a 4:3 size (450x355). It's easy to modify the dimensions to match the player on YouTube.

In the embed code provided, change the the width parameters to <strong>640</strong>, and height parameters to <strong>385</strong><strong></strong>.
<blockquote>
<pre>&lt;object <strong>width="640" height="385"</strong>&gt;
 &lt;param name="movie" value="http://www.youtube.com/v/rs-jAImScms&amp;hl=en&amp;fs=1&amp;rel=0"&gt;&lt;/param&gt;
 &lt;param name="allowFullScreen" value="true"&gt;&lt;/param&gt;
 &lt;param name="allowscriptaccess" value="always"&gt;&lt;/param&gt;
 &lt;embed src="http://www.youtube.com/v/rs-jAImScms&amp;hl=en&amp;fs=1&amp;rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" <strong>width="640" height="385"</strong>&gt;&lt;/embed&gt;
&lt;/object&gt;</pre>
</blockquote>
Make sure to change the dimensions in both places. Hopefully YouTube will update the options for customizing their embed code to do this automatically. For now, it's easy enough to edit by hand.

Note: For those that wish to keep the original width of the YouTube player with a widescreen format, use a width of <strong>450</strong> and a height of <strong>271</strong>. This might be useful for sites that were designed around the original player width.
