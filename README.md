#SG Library

A collection of reusable front-end resources for web developers.
There is nothing much here at the moment, but Ill be adding more content later on.

> ####What is this for?
Most of the time we invent or search online for designs and effects that we may use on our website projects. At some point, we may need something we already did before. Collecting these and making them reusable by creating a library would be very helpful.

####Minifying css and js
These instructions are meant for making '.css' and '.js' files smaller.

1. You need to have node.js installed.
2. Install gulp globally.
```bash
npm install gulp-cli -g
```
3. Install gulp on the Project's root directory
```bash
npm install gulp -D
```
4. Install gulp plugins as dependencies
```bash
npm install --save-dev gulp-autoprefixer gulp-clean-css gulp-terser
```
5. install del
```bash
npm install del
```
6. run gulpfile
``bash
gulp
```
7. Output files are located in the 'dist' folder.
>Sass '.scss' files are included on each effects/resources but converting them to regular '.css' files are not included on the gulpfile tasks. Why? Because I have sass locally installed and i prefer it that why. They are only included in case someone wants to modify them.

 





