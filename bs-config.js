'use strict';

/*
 * For up-to-date information about the options:
 *   http://www.browsersync.io/docs/options/
 */
module.exports = {
    port: 3005,
    "server": {
        "baseDir": "src",
        "routes": {
            "/node_modules": "node_modules"
        }
    }
}