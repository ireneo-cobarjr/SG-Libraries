# SG Library

A collection of reusable front-end resources for web developers.
There is nothing much here at the moment, but Ill be adding more content later on.

> #### What is this for?
>Most of the time we invent or search online for designs and effects that we may use on our website projects. At some point, we may need something we already did before. Collecting these and making them reusable by creating a library would be very helpful.

#### Minifying css and js

1. Install [node.js](https://nodejs.org)l.
2. Install gulp globally.
```
npm install gulp-cli -g
```
3. Install gulp on the Project's root directory and other dependencies.
```
npm install
```
4. run gulpfile to build and minify
```
gulp
```
5. Output files are located in the 'dist' folder.

6. Open demo.html; located in the root directory, on your browser to check that everything works.

#### Development
```
gulp dev
```
> Alternatively, you may run 'gulp {design/effect}-dev'

This will watch changes on the files and recompile it. Useful if you want to make changes and see it directly thru the demo.html page.






