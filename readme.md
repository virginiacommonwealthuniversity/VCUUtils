[![Powered by Virginia Commonwealth University](https://t4tools.vcu.edu/github/images/powered-by.svg?1WPrRDkiBwiDw1)](http://www.vcu.edu/)

# VCUUtils.js Library
*The Official VCU TerminalFour JS Library*

![Build Passing](https://t4tools.vcu.edu/github/images/build-passing.svg?1WPrRDkiBwiDw1)

## Version: 2.0.0
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
