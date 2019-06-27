// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
  
  /**
   * Clipboard functionality
   * 
   * Based on the "Simplest Possible Clipboard.js" example from:
   * https://codepen.io/chriscoyier/pen/bBBLRE
   * 
   * More details:
   * https://clipboardjs.com/
   */
  var clip = new ClipboardJS('.copybutton');

  clip.on("success", function() {
    console.log("Copying text to clipboard worked");
  });
  clip.on("error", function() {
    console.log("Copying text to clipboard did not work for some reason...");
  });
}());
