--- 
layout: post
title: Postmark CakePHP Component
wordpress_id: 493
wordpress_url: http://danielmcormond.com/?p=493
date: 2010-07-16 13:40:49 -04:00
---
I recently discovered the excellent email delivery service <a href="http://postmarkapp.com/">Postmark</a>. We had been running into some trouble sending email from one of our web apps. The SMTP server on our <a href="http://www.dreamhost.com/r.cgi?467109">Dreamhost</a> hosting account has a limit of 100 messages per hour. Additionally, many of our messages were bouncing and we had poor visibility into our delivery statistics.

There are some existing <a href="http://developer.postmarkapp.com/#php-5">PHP libraries for Postmark</a> available, but none that integrated elegantly with our <a href="http://cakephp.org/">CakePHP</a> based application. So I took a few minutes and whipped up a simple Postmark CakePHP component which I've made <a href="http://github.com/danielmcormond/postmark-cakephp">available on Github</a>.

<strong>Configuration</strong>

Add the following keys to your configuration:

<code>Configure::write('Postmark.uri', 'http://api.postmarkapp.com/email');
Configure::write('Postmark.key', '810de23c-5ffb-44d9-a424-7a4a5c0fba1a');</code>

If you want your connection to Postmark to be encrypted, simply change the uri to use https.

Make sure to modified the API key to match the credentials for your Postmark server rack instance.

<strong>Usage</strong>

This component extends the base CakePHP email component, and works virtually the same.

Place the postmark.php file in your app/controllers/components/ folder.

In your controller, make sure the component is available:

<code>public $components = array('Postmark');</code>   

Then, simply send messages like this:

<code>$this->Postmark->delivery = 'postmark';
$this->Postmark->from = 'sender@domain.com';
$this->Postmark->to = 'recipient@domain.com';
$this->Postmark->subject = 'this is the subject';
$messageBody = 'this is the message body';
$this->Postmark->send($messageBody);</code>

You can also use the following optional attributes:

<code>$this->Postmark->cc = array('recipient@domain.com');
$this->Postmark->bcc = array('recipient@domain.com');
$this->Postmark->replyTo = 'sender@domain.com';</code>

The syntax of all parameters is the same as the <a href="http://book.cakephp.org/view/1283/Email">default CakePHP email component</a>.

There is one additional attribute which can be used for setting the <a href="http://developer.postmarkapp.com/#message-format">Postmark tag property</a>:

<code>$this->Postmark->tag = 'contact';</code>

<strong>Debugging</strong>

You can see the response from Postmark in the return value when you send a message:

<code>$result = $this->Postmark->send($messageBody);
$this->log($result, 'debug');</code>

If there are any errors, they'll be included in the response. See the <a href="http://developer.postmarkapp.com/#api-error-codes">Postmark API documentation for error code detail</a>.

<strong>Conclusion</strong>

Hopefully others will find this useful. If you have any questions, problems, or suggestions, please let me know! Here's a link to the code: <a href="http://github.com/danielmcormond/postmark-cakephp">Postmark CakePHP Component on GitHub</a>.
