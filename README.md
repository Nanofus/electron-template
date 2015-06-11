# electron-template

Desktop app template using [Electron](https://github.com/atom/electron) with support for [AngularJS](https://github.com/angular/angular.js), [Bootstrap](https://github.com/twbs/bootstrap), [jQuery](https://github.com/jquery/jquery) and [jQuery UI](https://github.com/jquery/jquery-ui). Stylesheets are written in [SASS](https://github.com/sass/sass). Good for beginners (such as the author himself)!

The template uses a frameless window with a custom title bar with buttons mimicking Windows application frame's buttons. The middle button changes between "maximize" and "restore" depending if the window is fullscreen or not. The check is done with Angular `$interval` and comparing screen and window sizes instead of using Electron BrowserWindow events. This is because the events are not triggered by Windows Aero Snap. On other platforms the events could be used.

Made originally for the author's personal use, but he decided to share it after noticing people having trouble using scripts that require jQuery inside Electron. The trick is in `jqueryloader.js`, which is loaded first in `index.html`:
```js
var $ = jQuery = require("./bower_components/jquery/dist/jquery.min.js");
```

Before running the template you have to install Electron with [npm](https://www.npmjs.com/) and other dependencies with [Bower](https://github.com/bower/bower). Run these in the `public_html` folder after installing both of those:
```sh
# Install Electron with npm
$ npm install

# Install other dependencies with Bower
$ bower install
```

Next you can run Electron with `$ electron` and drag `main.js` into the window, or configure Electron to run the app directly.

You also have to install a SASS compiler to compile the stylesheet sources, or simply delete them and use normal CSS instead. The included stylesheets were compiled using NetBeans's built-in CSS preprocessor feature.

I hope this will be of some use to somebody! Pull requests are also more than welcome.

## Features
* A frameless window
* A custom title bar with a SASS stylesheet and simple buttons
* jQuery, jQuery UI, Bootstrap, AngularJS support
* Simple AngularJS app and controller included (the controller is used for the title bar buttons)
* NetBeans project files
