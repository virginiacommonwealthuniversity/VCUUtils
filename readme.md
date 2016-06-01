[![Powered by Virginia Commonwealth University](https://t4tools.vcu.edu/github/images/powered-by.svg?T5FpmGWhH7KiRA)](http://www.vcu.edu/)

# VCUUtils.js Library
*The Official VCU TerminalFour JS Library*

![Version 2.1.2_06.01.2016](https://img.shields.io/badge/version-2.1.2__06.01.2016-lightgrey.svg)
![Build Passing](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Dev-Dependencies Up-To-Date](https://img.shields.io/badge/devDependencies-up--to--date-yellow.svg)

## Version: 2.1.2
*2.1.2*
- Simplifed parseInj.genInj arguments
    - Old format: `parseInj.genInj(/class:{([^}]+)\}/g, 'class:{', '}', string);`
    - New format: `parseInj.genInj('class', string);`

*2.1.1*
- Added a parseInj function
    - .cookieInj(string)

*2.1.0*
- Included parseTemp module
    - .jade(string)

*2.0.1*
- Included todaysDate member

*2.0.0*
- Included parseInj module
    - .genInj(RegExp, startingInj, endingInj, string)
    - .classInj(string)
    - .idInj(string)
    - .styleInj(string)
    - .layoutInj(string)
    - .beforeInj(string)
    - .afterInj(string)

## Compiling
When compiling the VCUUtils...
### Install NPM Dependencies
```
$ npm i
```
### Run Gulp
```
$ gulp
```
Keep in mind that compiling **will fail** if any JSHint warnings or errors pop up; this is to ensure the cleanest syntax possible for a maintainable codebase.

## Documentation
Upon successful completion of compiling the library, documentation will automatically be included in a `docs` directory. This contains a complete HTML site structure that provides searchable documentation for the library.
