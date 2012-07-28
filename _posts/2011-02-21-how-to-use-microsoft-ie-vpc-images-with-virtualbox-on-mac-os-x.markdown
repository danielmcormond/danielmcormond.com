---
layout: post
title: How To Use Microsoft IE VPC Images with VirtualBox on Mac OS X
wordpress_id: 580
wordpress_url: http://danielmcormond.com/?p=580
date: 2011-02-21 15:14:29 -05:00
---

{.update} Update: these instructions may still work, but I highly recommend using [ievms](http://xdissent.github.com/ievms/) instead.

I recently learned about the [Virtual PC images](http://www.microsoft.com/downloads/en/details.aspx?FamilyID=21eabb90-958f-4b64-b5f1-73d0a413c8ef&amp;displaylang=en) that Microsoft offers for testing web applications. There are several downloads available that come packaged with various versions of Internet Explorer. With a little bit of work, but you can get these running in [VirtualBox](http://www.virtualbox.org/) on Mac OS X.

# Acquire

Things you'll need:
* [Wine](http://www.winehq.org/download/)
* [VirtualBox 4.0.4](http://www.virtualbox.org/wiki/Downloads)
* [Intel PRO/1000 drivers](http://downloadcenter.intel.com/confirm.aspx?httpDown=http://downloadmirror.intel.com/18717/eng/PROWin32.exe&amp;lang=eng&amp;Dwnldid=18717&amp;ProductID=871)
* [Disk Utility](http://en.wikipedia.org/wiki/Disk_Utility) (comes with Mac OS X)
* [The Unarchiver](http://wakaba.c3.cx/s/apps/unarchiver.html)

I used the Windows XP versions because they're smaller and easier to get running. Download any or all of these images:

* [XPSP3-IE6.EXE](http://www.microsoft.com/downloads/info.aspx?na=46&amp;SrcFamilyId=21EABB90-958F-4B64-B5F1-73D0A413C8EF&amp;SrcDisplayLang=en&amp;u=http%3a%2f%2fdownload.microsoft.com%2fdownload%2fB%2f7%2f2%2fB72085AE-0F04-4C6F-9182-BF1EE90F5273%2fXPSP3-IE6.EXE)
* [XPSP3-IE7.EXE](http://www.microsoft.com/downloads/info.aspx?na=46&amp;SrcFamilyId=21EABB90-958F-4B64-B5F1-73D0A413C8EF&amp;SrcDisplayLang=en&amp;u=http%3a%2f%2fdownload.microsoft.com%2fdownload%2fB%2f7%2f2%2fB72085AE-0F04-4C6F-9182-BF1EE90F5273%2fXPSP3-IE7.EXE)
* [XPSP3-IE8.EXE](http://www.microsoft.com/downloads/info.aspx?na=46&amp;SrcFamilyId=21EABB90-958F-4B64-B5F1-73D0A413C8EF&amp;SrcDisplayLang=en&amp;u=http%3a%2f%2fdownload.microsoft.com%2fdownload%2fB%2f7%2f2%2fB72085AE-0F04-4C6F-9182-BF1EE90F5273%2fXPSP3-IE8.EXE)

# Install

Install Wine, VirtualBox, and The Unarchiver.

# Extract

Open and run the XPSP3-IE * .EXE file(s) you downloaded from Microsoft using Wine. You can place the extracted files wherever you want.

Extract the PROWin32.exe file you downloaded from Intel using The Unarchiver application.

# Prepare Drivers

Run the Disk Utility application (Applications > Utilities > Disk Utility) and create a new disk image (File > New > Disk Image from Folder).

Select the PROWin32 folder which you created when you extracted the download from Intel.

Save the disk image as (Image Format: DVD/CD master) with (Encryption: none). You can save it whatever you want, but you should end up with a PROWin32.cdr file.

Run this command to convert the .cdr file to a Windows compatible .iso with this command:

`hdiutil makehybrid -iso -joliet -o /full/path/to/PROWin32.iso /full/path/to/PROWin32.cdr`

# Create

Run VirtualBox and create a new virtual machine. Tell it to 'Use existing hard disk' and select the .vhd file you downloaded and extracted from Microsoft. *Don't start up the virtual machine yet*.

> Note: the .vhd files from Microsoft all share the same UUID. So, if you want to use more than one image, you have to change the UUID of the subsequent images. You can do this with the following command:
> `VBoxManage internalcommands sethduuid /full/path/to/IE7Compat.vhd`

Before you start up your virtual machine, edit the settings and change Network > Adapter 1 > Advanced > Network Adapter Type to *Intel PRO/1000 MT Desktop (82540EM)*.

Make sure that System Preferences > Keyboard > 'Use all F1, F2, etc. keys as standard function keys' is checked, otherwise you might start playing iTunes when you try to boot into safe mode.
# Start
Start up the virtual machine, and push F8 repeatedly before the Windows logo appears. When the boot menu appears select to boot into Safe Mode with Command Prompt.

Cancel all the driver installation dialog boxes that pop up. Yes, it's very annoying.

Make the Intel drivers available by clicking on Devices > CD/DVD Devices > Choose a virtual CD/DVD disk file... and selecting the .iso you created earlier.

Run the *explorer* command in the command prompt to get access to the Start menu.

Open the Device Manger by clicking Start > right clicking on My Computer > Properties > Hardware tab > Device Manager.

Find the Ethernet Controller device and right click on it and select Update Driver... It should automatically detect the virtual CD you just mounted and install the Intel Drivers from that.

After you've installed the driver you can reboot the virtual machine and allow it to boot normally.

# Activate

Because we've changed so much of the virtual underlying hardware, Windows wants to reactivate. Now that you've got network connectivity, just click Yes and tell it to activate Windows over the internet.

# Guest Additions

At this point you can install the VirtualBox Guest Additions, which will help correct some things like the display driver.

You may still have a few bothersome missing driver pop-ups which can be solved by disabling hardware in VirtualBox settings, removing devices from Device Manger, or finding the missing drivers as necessary.

# Thanks

Thanks to [Travis](http://twitter.com/travis) for teaching me about the Microsoft VPC images! Also, I couldn't have figured this all out without this [helpful blog post from R0B0TZ](http://r0b0tz.com/2011/02/using-microsofts-ie6-ie7-ie8-vhd-virtual-pc-images-with-virtualbox/),and [this tip from MakeUseOf](http://www.makeuseof.com/tag/how-to-create-windows-compatible-iso-disc-images-in-mac-os-x/).

Let me know if you find this post helpful or if I missed any steps. I'll try my best to answer any questions in the comments.
