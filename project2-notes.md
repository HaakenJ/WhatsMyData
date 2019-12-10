# Notes for project

### Get Hardware and Software of user

* Use the userAgent property of the navigator object.  You can use the 
    ua-parse-js package to parse this object for different 
    values.
* https://www.npmjs.com/package/ua-parser-js

### Get screen side and browser window size

* window.screen.width - window width
* window.screen.height - window height
* window.screen.availWidth - screen width
* window.screen.availHeight - screen height

### Get the user's browser plugins

* navigator.plugins - returns a PluginArray of the available Plugin objects.
* In FireFox 29 and later, enumerating navigator.plugins may be restricted as
    a privacy measure.
* https://developer.mozilla.org/en-US/docs/Web/API/Plugin
* https://developer.mozilla.org/en-US/docs/Web/API/PluginArray
* https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/plugins

### How the social media login works

* There is an array of objects with the names of social media sites and the 
    urls of their login pages as properties.  Sending a request to the login 
    page of these sites either returns an html document if the user is not 
    logged in, or redirects to the site's favicon if the user is logged in.  
* An img tag is created for each web page so that if a favicon (an image)
    is returned from the url then the img.onload callback will be fired.
    If an HTML page is server from the URL then the img.onError() callback
    will be fired because you cannot use an HTML page as the src attribute
    for an img tag.

### Get client's IP Address

* There are tons of API's we could use that will return the client's IP.
* We can then pass this IP to one of many other API's that will return
    data about the user such as where the IP is located, lat and long, 
    timezone, etc.
* We could use Google maps as a graphic for the location.

### HTTP Referer(sic) Header Parameter

* This header field will identify where a user is visiting the site from.
* It contains the URL of the previous site they were on if they clicked
    any kind of link to get to the page.
* This is a large security concern and some browers automatically do not
    send this field but many do not.
* HTTPS sources only send it to other HTTPS locations.

### Getting a user's battery information

* Use the Battery status API https://www.w3.org/TR/battery-status/