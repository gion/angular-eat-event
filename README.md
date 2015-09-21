angular-eat-event
====================

An angularjs directive that hijacks events on the targeted dom element, prevents the default action (`preventDefault()`) and stops the propagation (`stopPropagation()`).  

##usage:  
  
 * download the script: 
   * [download](https://github.com/gion/angular-eat-event/releases/tag/0.1.0)
   * [clone](https://github.com/gion/angular-eat-event.git) 
   * or use [bower](http://bower.io) (`bower install --save angular-eat-event`) 
 * include the script into your app:  

```html
<script src="path/to/file/angular-eat-event.js"></script>
```
 * add the `eatEvent` module as a dependency to your angular app  
 
```javascript
angular.module('myFancyApp', ['eatEvent']);
```
 * use the directive in your views:  
 * 
```html
// don't leave the page on anchor click:   
<a href="some-link" eat-event="click">never leave me!!!</a>
```
or 

```html
// prevent multiple events:   
<label>You shall not type!</label>
<input eat-event="focus blur keypress" />
```


