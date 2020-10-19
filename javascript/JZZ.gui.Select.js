(function(global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory;
  }
  else if (typeof define === 'function' && define.amd) {
    define('JZZ.gui.Select', ['JZZ'], factory);
  }
  else {
    factory(JZZ);
  }
})(this, function(JZZ) {

});
