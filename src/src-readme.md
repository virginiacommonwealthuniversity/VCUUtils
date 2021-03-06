[![Powered by Virginia Commonwealth University](https://t4tools.vcu.edu/github/images/powered-by.svg{{random-query}})](http://www.vcu.edu/)

# VCUUtils.js Library
*The Official VCU TerminalFour JS Library*

![Version {{pkg-version}}_{{date-string}}](https://img.shields.io/badge/version-{{pkg-version}}__{{date-string}}-lightgrey.svg)
![Build Passing](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Dev-Dependencies Up-To-Date](https://img.shields.io/badge/devDependencies-up--to--date-yellow.svg)

## Version: 2.4.1
*2.4.1*
- Removed siteConfig module
    - This module did not work as intended, and has been found to be unnecessary at the current time

*2.4.0*
- Include siteConfig module
    - .nameSpaceExists(object)

*2.3.0*
- Included sort module
    - .array.viaObjectKey(array, string)
    - .array.viaObjectKey.reverse(array, string)

*2.2.0*
- Added in `VCUUtils.docwrite(...)`
    - Unlike T4Utils, this function does not wrap the string in any HTML

*2.1.2*
- Simplifed parseInj.genInj arguments
    - Old format: `VCUUtils.parseInj.genInj(/class:{([^}]+)\}/g, 'class:{', '}', string);`
    - New format: `VCUUtils.parseInj.genInj('class', string);`

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

## Documentation
Upon successful completion of compiling the library, documentation will automatically be included in a `docs` directory. This contains a complete HTML site structure that provides searchable documentation for the library.
