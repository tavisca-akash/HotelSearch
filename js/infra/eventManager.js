'use strict';

window.hotel.eventManager = (function() {
  var _subscribe = {}; //private to EventManager 

  return {
    subscribe: function(eventName, eventHandler) {
      
      if ((typeof eventName !== 'string') || (typeof eventHandler !== 'function')){
        throw new Error('eventName or callback type is Invalid!!!');
      }
  
      var _eventId = new Date().getTime();
      var eventInfo = {
        eventId: _eventId,
        eventHandler: eventHandler
      };
  
      (_subscribe.eventName = _subscribe.eventName || []).push(eventInfo);
    },
  
    unsubscribe: function(eventName, eventHandler) {
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
    },
  
    fire: function(eventName, reference, params) {
      
      var subscribe = _subscribe.eventName;
      
      // TODO make params into an array or look for a better solution.
      
      params = params || [];
  
      if (subscribe !== undefined) {
        for (var i = 0; i < subscribe.length; i++) {
          if (subscribe[i].eventHandler === eventHandler)
          {
            setTimeout(function() {
            // TODO figure the reference part out.
            // refer eventManager.fire('Results Fetched', this, hotelList);

              eventHandler.apply(reference, params); 
            });
          }
        }
      }
    },
  };
})();