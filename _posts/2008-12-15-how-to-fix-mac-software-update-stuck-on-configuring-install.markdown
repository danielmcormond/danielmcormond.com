---
layout: post
title: How To Fix Mac Software Update Stuck On "Configuring Install"
wordpress_id: 82
wordpress_url: http://danielmcormond.com/?p=82
date: 2008-12-15 19:17:49 -05:00
---

Apple recently released a [10.5.6 update](http://support.apple.com/kb/HT3194) to OS X. While I was downloading the new stuff using Software Update, my internet connection was interrupted. I relaunched Software Update and assumed it would continue downloading. It appeared to finish and then asked to reboot to complete the update process.

Unfortunately, the update process got stuck on *Configuring Install* and just sat there indefinitely. After an unhealthy hard power reset, I tried again with no luck. It seems the interrupted download led to some incomplete files and was hanging the update process.

I was able to solve the problem by deleting the partially downloaded files, then re-downloading using Software Update. This time around, the update applied successfully, upgrading and patching my OS X installation.

Hopefully this post will help others experiencing the same problem. My initial Google search returned a lot of outdated results.

In summary: if you keep getting stuck on *Configuring Install* during an update, try deleting the files in */Library/Updates/* and restarting the update process.
