# iptools-jquery-manager [![Build Status](http://img.shields.io/travis/interactive-pioneers/iptools-jquery-manager.svg)](https://travis-ci.org/interactive-pioneers/iptools-jquery-manager) [![Bower version](https://badge.fury.io/bo/iptools-jquery-manager.svg)](http://badge.fury.io/bo/iptools-jquery-manager)

Component manager for dynamic initialisation of IPT components from markup.

## Features

- Initialise [iptools-jquery](https://github.com/interactive-pioneers/iptools-jquery) components
   - with options from markup
   - on `ajax:complete`, e.g. on applications using [jquery-ujs](https://github.com/rails/jquery-ujs)

## Requirements

- `jQuery >=1.11.3 <3.0.0`

## Usage

### Component definition in markup

Components that should automatically initialise must define `data-component` and `data-component-options` (optional) attributes on HTML element, e.g.:

```html
<nav data-component="iptMlhMenu" data-component-options="{'title': 'Menu', 'subtitle': '', 'breakPalm': 720, 'menuExtensions': ['theme-pioneers', 'effect-slide-menu', 'multiline'] }">
  ...
</nav>
```

### Component manager initialisation

```js
$('body').iptManager({
  callback: function() {} // Callback function executed on component initialisation
});
```

## Contributions

See [CONTRIBUTING](CONTRIBUTING.md).

## Licence

Copyright © 2015-2017 Interactive Pioneers GmbH, contributors. Licenced under [GPL-3](LICENSE).
