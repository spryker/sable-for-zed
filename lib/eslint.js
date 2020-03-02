const CLIEngine = require("eslint").CLIEngine;
const globby = require("globby");
const settings = require('./settings');

const getPathPattern = async () => {
    const pathPattern = [`${settings.paths.bundlesDir}/**/*.js`];
    const pathPatternEco = `${settings.paths.ecoDir}/**/*.js`;
    const ecoFilesToVerify = await globby([pathPatternEco]);

    if (ecoFilesToVerify.length > 0) {
        pathPattern.push(pathPatternEco)
    }

    return pathPattern;
}

const runESLint = async () => {
    const pathPattern = await getPathPattern();
    const cli = new CLIEngine({
        configFile: settings.paths.esLintConfig,
        useEslintrc: false,
        ignorePattern: ['node_modules/']
    });
    const formatter = cli.getFormatter('compact');
    const report = cli.executeOnFiles(pathPattern);
    console.log(formatter(report.results));
}

runESLint();