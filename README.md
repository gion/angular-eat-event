xv-angular-eat-event
====================

An angularjs directive that hijacks events on the targeted dom element and prevents the default action (`preventDefault()`)  

usage:  
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


