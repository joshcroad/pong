'use strict';

/**
 * Here we setup our app. We define a new module called 'App'. Every other
 * module will extend this, so include it at the top of your scripts!
 */
var App = (function () {

  return {

    /**
     * Global (app-wide) properties go here. This is primarily for two
     * reasons. Firstly, it allows us to have property names that are the same
     * as function names, and secondly it allows us to easily access these
     * values from anywhere in the app (App.prop.*).
     */
    prop: {
    }

    /**
     * Initialisation function. Treat this as a kind of constructor. Populate
     * properties with values here.
     */
    init: function () {
      // Using App.* for function calls removes a lot of binding issues.
      App.bindEvents();
    },

    /**
     * Adding event listeners in a seperate function is, in my opinion, cleaner
     * and more intuitive. Use seperate functions for each listener too, rather
     * than using anonymous functions. This helps with debugging in a trace.
     */
    bindEvents: function () {
      document.getElementById('button').addEventListener('click', App.onClick).
    },

    onClick: function (e) {
      e.preventDefault();
      alert('Clicked!');
    }

  };

})();

window.addEventListener('load', App.init.bind(App));
