(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function injectStylesheet(s,e){var t=s.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,s.head.appendChild(t)}function injectScript(s,e){var t=s.createElement("script");t.type="text/javascript",t.src=e,t.async=!1,s.head.appendChild(t)}function injectAssets(s,e,t){t.forEach(function(t){var n=e.assetRoot+"build/"+e.manifest[t];n.match(/\.css/)?injectStylesheet(s,n):injectScript(s,n)})}function bootHypothesisClient(s,e){var t=s.querySelector('link[type="application/annotator+html"]');if(!t){var n=s.createElement("link");n.rel="sidebar",n.href=e.sidebarAppUrl,n.type="application/annotator+html",s.head.appendChild(n),injectAssets(s,e,["scripts/polyfills.bundle.js","scripts/jquery.bundle.js","scripts/injector.bundle.js","styles/icomoon.css","styles/inject.css","styles/pdfjs-overrides.css"])}}function bootSidebarApp(s,e){injectAssets(s,e,["scripts/raven.bundle.js","scripts/angular.bundle.js","scripts/katex.bundle.js","scripts/showdown.bundle.js","scripts/polyfills.bundle.js","scripts/unorm.bundle.js","scripts/app.bundle.js","styles/angular-csp.css","styles/angular-toastr.css","styles/icomoon.css","styles/katex.min.css","styles/app.css"])}function boot(s,e){s.querySelector("hypothesis-app")?bootSidebarApp(s,e):bootHypothesisClient(s,e)}module.exports=boot;

},{}],2:[function(require,module,exports){
"use strict";var boot=require("./boot"),settings=require("../shared/settings")(document);boot(document,{assetRoot:settings.assetRoot||"__ASSET_ROOT__",manifest:__MANIFEST__,sidebarAppUrl:settings.sidebarAppUrl||"__SIDEBAR_APP_URL__"});

},{"../shared/settings":3,"./boot":1}],3:[function(require,module,exports){
"use strict";function assign(t,s){for(var e in s)s.hasOwnProperty(e)&&(t[e]=s[e]);return t}function settings(t){for(var s=t.querySelectorAll("script.js-hypothesis-config"),e={},n=0;n<s.length;n++)assign(e,JSON.parse(s[n].textContent));return e}module.exports=settings;

},{}]},{},[2])
//# sourceMappingURL=boot.bundle.js.map
