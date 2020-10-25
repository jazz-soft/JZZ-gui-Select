# JZZ-gui-Select

MIDI Input/Output pickers

![Firefox](https://jazz-soft.github.io/img/firefox.jpg)
![Chrome](https://jazz-soft.github.io/img/chrome.jpg)
![Opera](https://jazz-soft.github.io/img/opera.jpg)
![Safari](https://jazz-soft.github.io/img/safari.jpg)
![Internet Explorer](https://jazz-soft.github.io/img/msie.jpg)
![Edge](https://jazz-soft.github.io/img/edgc.jpg)  
[![npm](https://img.shields.io/npm/v/jzz-gui-select.svg)](https://www.npmjs.com/package/jzz-gui-select)
[![npm](https://img.shields.io/npm/dt/jzz-gui-select.svg)](https://www.npmjs.com/package/jzz-gui-select)

## Install

`npm install jzz-gui-select --save`  
or `bower install jzz-gui-select`  
or `yarn add jzz-gui-select`  
or get the full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-gui-Select)

## Usage

##### Plain HTML

```html
<script src="JZZ.js"></script>
<script src="JZZ.gui.Select.js"></script>
//...
```

##### CDN (jsdelivr)

```html
<script src="https://cdn.jsdelivr.net/npm/jzz"></script>
<script src="https://cdn.jsdelivr.net/npm/jzz-gui-select"></script>
//...
```

##### CDN (unpkg)

```html
<script src="https://unpkg.com/jzz"></script>
<script src="https://unpkg.com/jzz-gui-select"></script>
//...
```

##### CommonJS

```js
var JZZ = require('jzz');
require('jzz-gui-select')(JZZ);
//...
```

##### AMD

```js
require(['JZZ', 'JZZ.gui.Select'], function(JZZ, select) {
  // ...
});
```

## Example

```html
<select id=select_midi_in></select>
<select id=select_midi_out></select>

<script>
var midi_in = JZZ.gui.SelectMidiIn({ at: 'select_midi_in' });
var midi_out = JZZ.gui.SelectMidiOut({ at: 'select_midi_out' });
// directect MIDI stream from midi_in to midi_out:
midi_in.connect(midi_out);
</script>
```

## More information

Please visit [**https://jazz-soft.net**](https://jazz-soft.net) for more information.  
Your questions and comments are welcome [**here**](https://jazz-soft.org).

We would really appreciate your [**support**](https://jazz-soft.net/donate)!
