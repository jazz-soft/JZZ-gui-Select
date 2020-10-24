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

  if (!JZZ.gui) JZZ.gui = {};
  if (JZZ.gui.SelectMidiIn) return;

  function _param(arg) {
    var param = {};
    if (!arg || !arg.at) {
      throw 'missing parameter';
    }
    param.at = arg.at;
    if (typeof param.at == 'string') param.at = document.getElementById(param.at);
    _removeall(param.at);
    return param;
  }
  function _removeall(sel) {
    for (var i = sel.options.length - 1; i >= 0; i--) sel.remove(i);
  }
  function _populate(sel, arr, def) {
    for (var i = 0; i < arr.length; i++) sel[i] = new Option(arr[i].name, arr[i].name, arr[i].name == def, arr[i].name == def);
  }

  function SelectMidiIn(arg) {
    if (!(this instanceof SelectMidiIn)) return new SelectMidiIn(arg);
    var self = this;
    var param = _param(arg);
    this._sel = param.at;
    JZZ().and(function() {
      _populate(self._sel, this.info().inputs);
      self._sel.addEventListener('change', function() {
        var name = self._sel.options[self._sel.selectedIndex].value;
        if (name == self._name) return;
        JZZ().openMidiIn(name).or(function() {
console.log('Cannot connect', name);
        }).and(function() {
          if (self._port) {
            self._port.disconnect(self);
            self._port.close();
          }
          self._port = this;
          self._port.connect(self);
          self._name = name;
        });
      });
    });
  }
  SelectMidiIn.prototype = new JZZ.Widget();
  SelectMidiIn.prototype.constructor = SelectMidiIn;

  function SelectMidiOut(arg) {
    if (!(this instanceof SelectMidiOut)) return new SelectMidiOut(arg);
    var self = this;
    var param = _param(arg);
    this._sel = param.at;
    JZZ().and(function() {
      _populate(self._sel, this.info().outputs);
      self._sel.addEventListener('change', function() {
        var name = self._sel.options[self._sel.selectedIndex].value;
        if (name == self._name) return;
        JZZ().openMidiOut(name).or(function() {
console.log('Cannot connect', name);
        }).and(function() {
          if (self._port) {
            self.disconnect(self._port);
            self._port.close();
          }
          self._port = this;
          self.connect(self._port);
          self._name = name;
        });
      });
    });
  }
  SelectMidiOut.prototype = new JZZ.Widget();
  SelectMidiOut.prototype.constructor = SelectMidiOut;

  JZZ.gui.SelectMidiIn = SelectMidiIn;
  JZZ.gui.SelectMidiOut = SelectMidiOut;

});
