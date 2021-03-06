Set up from scratch
====

**!!! WORK IN PROGRESS !!!**

TODO :
* missing instructions
* give some rational

Tools used to set up the project from scratch:
* curl
* fmt
* sed
* unzip
* wget

```bash

# Job done under Ubuntu

# Check npm and node availability

$ npm --version
$ node --version

# Set up a configuration

$ npm init --force
$ npm install --save-dev lite-server
$ sed -i '/^\s*"scripts"\s*:/ a\
    "start": "npm run dev",\
    "dev": "lite-server"
' package.json
$ sed -i '/^\s*"test"\s*:/ d' package.json
$ sed -i '/^\s*"main"\s*:/ d' package.json
$ sed -i -E 's/^(\s*"license"\s*:\s*).*$/\1"MIT",/' package.json

$ touch README.md

$ curl "https://choosealicense.com/licenses/mit/#" | xmllint --xpath "//pre/node()" --recover - > LICENSE

$ sed -i "s/\[year]/`date +%Y`/" LICENSE
$ sed -i "s/\[fullname]/atao60 \& popsuite.org/" LICENSE

$ fmt -w 117 LICENSE > LICENSE.tmp && mv -f LICENSE.tmp LICENSE

$ npm install --save systemjs typescript plugin-typescript

# As we want a non stable version of Bootstrap, it must be specified:

$ npm install --save bootstrap@4.0.0-beta font-awesome

$ wget -O s-193323.zip https://www.freefavicon.com/freefavicons/letters/download.php?ico=s-193323.zip
$ unzip s-193323.zip -x *.txt *.png
$ mv favicon.ico s-193323.ico
$ rm -f s-193323.zip

# Add the code

$ touch style.css

$ mkdir -pv src/app

$ cat > src/app/person.ts <<_
export class Person {
  public name: string = 'David';
}
_

$ cat > src/main.ts <<_
import {Person} from './person';

let person = new Person();
console.log("Person name: " + person.name);
_

$ cat > src/index.html <<_
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Quickstart with Typescript 2, Bootstrap 4 and SystemJS 0.20</title>
  <link rel="icon" type="image/x-icon" href="s-193323.ico">

  <link rel="stylesheet" type="text/css" href="../node_modules/bootstrap/dist/css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="../node_modules/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" type="text/css" href="style.css">
  
  <script type="text/javascript" src="../node_modules/systemjs/dist/system.js"></script>
  <!-- configure SystemJS loader -->
  <script type="text/javascript" src="systemjs.config.js"></script>
</head>

<body>
  <div class="container">
    <div class="jumbotron">
      <h1>Building JavaScript Demos</h1>
      <p>With System.js 0.20, TypeScript 2.4 and Bootstrap 4</p>
    </div>
    <h2>Welcome!<span class="fa fa-handshake-o"></span></i></h2>
    <p>Open the browser console to check if the "Person name: David" message is there.</p>
    <div class="footer">
      <em>This demo is built with the <span>TSC compiler</span> (v2.4.2) on the browser side using <span>plugin-typescript</span> (v7.1.0).</em>
    </div>
  </div>
</body>

</html>
_


$ cat > systemjs.config.js <<_
(function (global) {

    System.config({
        warnings: true,
        map: {
            'app': 'app',
            'typescript': '../node_modules/typescript/lib/typescript.js',
            'ts': '../node_modules/plugin-typescript/lib/plugin.js'
        },
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },        
        packages: {
            'app': {
                defaultExtension: 'ts'
            }
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        }
    });

    global.bootstrapping = System
        .import('./main.ts')
        .then(
        function handleResolve() {

            console.info("System.js successfully bootstrapped app.");

        },
        function handleReject(error) {

            console.warn("System.js could not bootstrap the app.");
            console.error(error);

            return (Promise.reject(error));

        });

})(this);
_

```

TODO: to be completed

$ git init
$ git add .
$ git commit -m "first commit"
$ git remote add origin https://github.com/atao60/systemjs0_20-transpile-on-browser.git
$ git push -u origin master

