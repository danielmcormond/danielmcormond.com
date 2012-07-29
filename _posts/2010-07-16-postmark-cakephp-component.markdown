---
layout: post
title: Postmark CakePHP Component
wordpress_id: 493
wordpress_url: http://danielmcormond.com/?p=493
date: 2010-07-16 13:40:49 -04:00
---

I recently discovered the excellent email delivery service [Postmark](http://postmarkapp.com/). We had been running into some trouble sending email from one of our web apps. The SMTP server on our [Dreamhost](http://www.dreamhost.com/r.cgi?467109) hosting account has a limit of 100 messages per hour. Additionally, many of our messages were bouncing and we had poor visibility into our delivery statistics.

There are some existing [PHP libraries for Postmark](http://developer.postmarkapp.com/#php-5) available, but none that integrated elegantly with our [CakePHP](http://cakephp.org/) based application. So I took a few minutes and whipped up a simple Postmark CakePHP component which I've made [available on Github](http://github.com/danielmcormond/postmark-cakephp).

#### Configuration

Add the following keys to your configuration:

{% highlight php startinline %}
Configure::write('Postmark.uri', 'http://api.postmarkapp.com/email');
Configure::write('Postmark.key', '810de23c-5ffb-44d9-a424-7a4a5c0fba1a');
{% endhighlight %}

If you want your connection to Postmark to be encrypted, simply change the uri to use https.

Make sure to modified the API key to match the credentials for your Postmark server rack instance.

#### Usage

This component extends the base CakePHP email component, and works virtually the same.

Place the postmark.php file in your app/controllers/components/ folder.

In your controller, make sure the component is available:

{% highlight php startinline %}
public $components = array('Postmark');
{% endhighlight %}

Then, simply send messages like this:

{% highlight php startinline %}
$this->Postmark->delivery = 'postmark';
$this->Postmark->from = 'sender@domain.com';
$this->Postmark->to = 'recipient@domain.com';
$this->Postmark->subject = 'this is the subject';
$messageBody = 'this is the message body';
$this->Postmark->send($messageBody);
{% endhighlight %}

You can also use the following optional attributes:

{% highlight php startinline %}
$this->Postmark->cc = array('recipient@domain.com');
$this->Postmark->bcc = array('recipient@domain.com');
$this->Postmark->replyTo = 'sender@domain.com';
{% endhighlight %}

The syntax of all parameters is the same as the [default CakePHP email component](http://book.cakephp.org/view/1283/Email).

There is one additional attribute which can be used for setting the [Postmark tag property](http://developer.postmarkapp.com/#message-format):

{% highlight php startinline %}
$this->Postmark->tag = 'contact';
{% endhighlight %}

#### Debugging

You can see the response from Postmark in the return value when you send a message:

{% highlight php startinline %}
$result = $this->Postmark->send($messageBody);
$this->log($result, 'debug');
{% endhighlight %}

If there are any errors, they'll be included in the response. See the [Postmark API documentation for error code detail](http://developer.postmarkapp.com/#api-error-codes).

#### Conclusion

Hopefully others will find this useful. If you have any questions, problems, or suggestions, please let me know! Here's a link to the code: [Postmark CakePHP Component on GitHub](http://github.com/danielmcormond/postmark-cakephp).
