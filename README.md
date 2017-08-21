SystemJS 0.20 with Typescript 2, Bootstrap 4 and Font-Awesome
=====

A minimalistic template for quickly building a demo to gather help, to show a potential bug report or to set up a POC. 

No [grunt](https://gruntjs.com/), [gulp](https://gulpjs.com/) ... only [npm](https://www.npmjs.com/).

The package `lite-server`, with the help of `Browsersync`, serves the static content, detects changes, refreshes the browser, ... 

When the demo is launched as a page from the local FS, then a manual refresh (F5) is requiered to take in account any change.

The template uses the latest available versions at the moment being.

How to start
-----

* Retrieve the code
* Change the title in index.html
* Replace the favicon
* Update versions in package.json
* Install packages: `npm install`
* Run: `npm start` or `firefox -P dev index.html` *(or any available browser)*
* Add your packages
* Write your code

> See below about `dev` profile with Firefox to avoid blocking CORS errors.

Technical points
------

### Requirements

There is no requirement to run the demo but a browser: the demo can be launched from either a server (http://) or the local file system (file://).

Other requirements are:
* npm 5+, only to retrieve the packages,
* node 4+, only to launch `lite-server`.

### Tools

To retrieve this project from remote repository: git or (under Linux) wget + tar.

### Transpiling with SystemJS 0.20

As set out in [SystemJS - Release 0.20.0](https://github.com/systemjs/systemjs/releases/tag/0.20.0):
	
>Default transpiler loading is removed. It is no longer possible to transpile sources without configuring one of the transpiler plugins

Here `plugin-typescript` is used.

### No more type validation

As set out in [Removal of type-checking support #194](https://github.com/frankwallis/plugin-typescript/issues/194
):

> From version 7.0.0 onwards, plugin-typescript no longer supports type-checking, files are now only transpiled and the plugin will report on syntax errors but will not report any type-checking errors. Here I want to record the reasoning behind this and open it up for discussion.

It's not an issue here as the purpose of this template is to quickly build some demo: no bundling, no testing and ... no type checking. But any good IDE will do the job...

### Firefox and starting page from the local FS

#### CORS errors

To be more specific, [Gecko - Same-origin policy for file: URIs](https://developer.mozilla.org/en-US/docs/Same-origin_policy_for_file:_URIs).

When Firefox launches a page directly from the local file system (file://), by default it will accept to load others files only from the starting page's folder or any sub folders. 

But with the current configuration, the packages are stored in the folder `node_modules` under the project root folder, i.e. outside the starting page folder. Then the need to use a Firefox profile, here called `dev`, where the option `security.fileuri.strict_origin_policy` is set to `false`.

**WARNING: _don't do that with your default profile used to cruise on Internet._ You are warned!**

>Other browsers such as Chrome may requiere similar adaptation. You are on your own here.

#### XML Parsing Error

As the files are loaded from the local FS, no content-type is provided. So Firefox assumes that, since this is _XML_HttpRequest, the response might be XML and tries to parse it. When that fails, it stops trying and reports this wasn't XML after all.

So the browser console is cluttered with messages such as "XML Parsing Error: syntax error[...]" or "XML Parsing Error: not well formed[...]". There is nothing you can do about it but to ignore them.

Get the code
----

To start quickly, you can retrieve the code with:

```shell

# If git is available:

$ git clone -b master --single-branch https://github.com/atao60/systemjs0_20-transpile-on-browser.git

# Otherwise (under Linux): 

$ wget https://github.com/atao60/systemjs0_20-transpile-on-browser/archive/master.tar.gz
$ tar xpvf master.tar.gz
$ rm -f master.tar.gz

```

Retrieve the packages
----

```shell

$ cd systemjs0_20-transpile-on-browser
$ npm install

```

Run
----

```shell

# Either with a server as `lite-server`:

$ npm start

# or from the local file system with any browser, e.g.:

$ firefox -P dev index.html

```

In either case, the browser will open a new tab showing the application.

Other references
-----

* [What the Hell Does console.error.bind(console) Do?](https://www.tjvantoll.com/2015/12/29/console-error-bind/), TJ VanToll, Dec 29, 2015

Credits and licenses
------

Licensed under [MIT License](https://opensource.org/licenses/MIT).

### Original work

> [How to Use Typescript with SystemJS](http://david-barreto.com/how-to-use-typescript-with-systemjs/), 22 Feb 2016, David Barreto

### Which iconic font?

Bootstrap 4 doesn't provide support to [glyphicons-halflings](http://glyphicons.com/) any more. Cf. [Bootstrap - Migrating to v4](http://v4-alpha.getbootstrap.com/migration/).

The library [font-awesome](http://fontawesome.io/) is used here.

Other option: [Github Octicons](https://octicons.github.com/)

### Get a favicon

A stylised letter 'S' is used as favicon.

Source: https://openclipart.org/detail/193323/s through [Free Favicon](https://www.freefavicon.com/about/).

Under [Creative Commons Zero 1.0 Public Domain License](http://creativecommons.org/publicdomain/zero/1.0/). Cf. [openclipart's policy](https://openclipart.org/share).

