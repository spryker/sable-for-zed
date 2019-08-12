# Changelog

### 2.4.1
Updated patch version due to wrong release.

### 2.4.0
Released on 12.09.2019

Updated dependency:
- `yargs`: `11.0.0` => `13.3.0`

### 2.3.0
Released on 13.06.2019

Extend configuration to search entry points in spryker-eco namespace.

Update dependencies:
- `css-loader`: `0.28.10` => `2.1.1`
- `optimize-css-assets-webpack-plugin`: `4.0.0` => `5.0.1`

### 2.2.0
Released on 10.12.2018

- update dependencies
	- @spryker/oryx 1.2.0 > 1.3.0
	- node-sass 4.8.3 > 4.10.0
	- webpack 4.6.0 > 4.27.0

### 2.1.0
Released on 20.04.2018

- update dependencies
	- @spryker/oryx 1.1.0 > 1.2.0

### 2.0.0  
Released on 20.04.2018

Update the tool and make it working with webpack 4. Configuration and all dependencies are updated accordingly. See `package.json` for more details.

### 1.1.1
Released on 28.09.2017

- add fix for [`jquery-migrate` 3.0.1](https://github.com/jquery/jquery-migrate/issues/273)
- add dependecy:
    - imports-loader ~0.7.1

### 1.1.0
Released on 30.05.2017

- add support for node ^7.0.0
- update dependecies:
    - @spryker/oryx ^1.0.0 => ^1.1.0

### 1.0.0
Released on 21.04.2017

- documentation moved to [spryker.github.io/user-interface/oryx/for-zed](http://spryker.github.io/user-interface/oryx/for-zed)
- update dependecies:
    - @spryker/oryx ^0.4.9 => ^1.0.0

### 0.5.8 (beta)
Released on 30.03.2017

- remove handler for `oryx.build()` promise
- update dependecies:
    - @spryker/oryx ^0.4.8 => ^0.4.9

### 0.5.7 (beta)
Released on 30.03.2017

- handle `oryx.build()` promise
- use `oryx.build.loadCompiler()` to load webpack
- update dependecies:
    - @spryker/oryx ^0.4.4 > ^0.4.8

### 0.5.6 (beta)
Released on 29.03.2017

- update webpack commonsChunckPlugin configuration

### 0.5.5 (beta)
Released on 29.03.2017

- update webpack configuration to remove errors introduced due to webpack update
- update dependecies:
    - webpack ~2.2.0 > ~2.3.2

### 0.5.4 (beta)
Released on 07.03.2017

- update dependecies:
    - @spryker/oryx ^0.4.3 > ^0.4.4

### 0.5.3 (beta)
Released on 07.03.2017

- update dependecies:
    - @spryker/oryx ^0.4.0 > ^0.4.3

### 0.5.2 (beta)
Released on 07.03.2017

- update dependecies:
    - @spryker/oryx ^0.3.0 > ^0.4.0

### 0.5.1 (beta)
Released on 07.03.2017

- remove `extract-text-webpack-plugin` deprecations in `webpack.config.js` file
- update engines:
    - npm >=3.0.0
    - remove yarn

### 0.5.0 (beta)
Released on 07.03.2017

- update dependencies in package.json:
    - extract-text-webpack-plugin 2.0.0-beta.5 > 2.1.0
    - file-loader 0.9.0 > 0.10.1               
    - node-sass 4.3.0 > 4.5.0           
    - postcss-loader 1.2.2 > 1.3.3      
    - resolve-url-loader 1.6.1 > 2.0.2   
    - sass-loader 4.1.1 > 6.0.2     
    - yargs 6.6.0 > 7.0.1
- update engines:
    - npm ^3.0.0
    - yarn >= 0.19.0
- update yarn.lock file
- add CHANGELOG.md

### 0.4.x (alpha)
Released on 24.02.2017

- test alpha release
