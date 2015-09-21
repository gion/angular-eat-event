// directive for canceling an event on click
// inspired from http://stackoverflow.com/questions/10931315/how-to-preventdefault-on-anchor-tags-in-angularjs#14165848

// @USAGE
// <a href="some link" >blah</a>
// <a href="some link" eat-event="click">blah</a>
// <a href="some link" eat-event="click touchstart mouseover">blah</a>

angular.module('eatEvent', [])

  .constant('defaultEvent', 'click')

  .directive('eatEvent', ['defaultEvent', function(defaultEvent) {
    var link = function(scope, element, attrs) {

      var eventName = attrs.eatEvent || defaultEvent;

      element.on(eventName, function(event) {
        event.stopPropagation();
        event.cancelBubble = true;
        event.preventDefault();

        return false;
      });
    };

    return {
      restrict: 'A',
      link: link
    };
  }]);
