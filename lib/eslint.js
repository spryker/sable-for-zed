const CLIEngine = require("eslint").CLIEngine;
const glob = require("glob");
const settings = require('./settings');

const getPathPattern = new Promise((resolve, reject) => {
    const pathPatternEco = `${settings.paths.ecoDir}/**/*.js`;

    glob(pathPatternEco, (error, files) => {
        const pathPattern = [`${settings.paths.bundlesDir}/**/*.js`];
        
        if (files.length > 0) {
            pathPattern.push(pathPatternEco);
        }
        
        if (error !== null) {
            reject(error);
        }
        
        resolve(pathPattern);
    });
});

getPathPattern.then(pathPattern => {
    const cli = new CLIEngine({
        configFile: settings.paths.esLintConfig,
        useEslintrc: false,
        ignorePattern: ['node_modules/']
    });
    const formatter = cli.getFormatter('compact');
    const report = cli.executeOnFiles(pathPattern);
    console.log(formatter(report.results));
}).catch(error => {
    console.error(error);
});
