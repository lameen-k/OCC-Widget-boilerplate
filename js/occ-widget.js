define(['knockout', 'jquery'],
    function (ko, $) {
       'use strict';
        
       var privateMethod = function () {};

       return {

            onLoad: function(widget) {
                console.log(widget);
            },
            
            beforeAppear: function (page) {},

      } 
});