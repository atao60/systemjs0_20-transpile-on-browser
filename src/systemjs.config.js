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