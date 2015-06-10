# electron-template

Desktop app template using [Electron](https://github.com/atom/electron) with support for [AngularJS](https://github.com/angular/angular.js), [Bootstrap](https://github.com/twbs/bootstrap), [jQuery](https://github.com/jquery/jquery) and [jQuery UI](https://github.com/jquery/jquery-ui). Stylesheet written in [SASS](https://github.com/sass/sass).

Made originally for my personal use, but decided to share it after noticing people having trouble using scripts that require jQuery inside Electron. The trick is in `jqueryloader.js`, which is loaded first in `index.html`:
```
var $ = jQuery = require("./bower_components/jquery/dist/jquery.min.js");
```

Before running the template with Electron you have to install dependencies with [Bower](https://github.com/bower/bower) (install Bower and run `$ bower install` in the `public_html` folder).

I hope this will be of some use to somebody!

## Features
* A frameless window
* A custom title bar with SASS stylesheet and simple buttons
* jQuery, jQuery UI, Bootstrap, AngularJS support
* Simple AngularJS app and controller included (the controller is used for the title bar buttons)
* NetBeans project files
