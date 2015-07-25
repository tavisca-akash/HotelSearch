'use strict';

window.eventManager = new function() {

  var _subscribe = {}; //private to EventManager 

  this.subscribe = function(eventName, context, eventHandler) {

    if ((typeof eventName !== 'string') || (typeof eventHandler !== 'function')){
      throw new Error('eventName or callback type is Invalid!!!');
    }

    var _eventId = new Date().getTime();
    var eventInfo = {
      eventId: _eventId,
      context: context,
      eventHandler: eventHandler
    };

    (_subscribe.eventName = _subscribe.eventName || []).push(eventInfo);
  };

  this.unsubscribe = function(eventName, eventHandler) {
    var args = arguments;
    /**
    * If only the eventName is passed 
    * then we unsubscribe the all events of that type.
    */

    if (args.length === 1 && typeof args[0] === 'string') {
      _subscribe.eventName = [];
    }

    /**
    * Otherwise, remove that specific instance.
    */

    else if (typeof eventHandler === 'function') {
      var subscribe = _subscribe.eventName;

      if (subscribe !== undefined) {
        var positionFound = -1;

        for (var index = subscribe.length - 1; index >= 0; index--) {
          
          if(subscribe[index] === eventHandler) {
            positionFound = index;
          }
        }

        if (positionFound >= 0) {
          subscribe.splice(positionFound, 1);
        }
      }
    }

    return this;
  };

  this.fire = function(eventName, sender, params) {

    if (_subscribe.eventName !== undefined) {
      for (var i = 0; i < _subscribe.eventName.length; i++) {

        setTimeout(function(context, callback, sender, args){
          callback.apply(context, [sender, args])
        }, 0, _subscribe.eventName[i].context, _subscribe.eventName[i].eventHandler, sender, params);

      }
    }
  };
}