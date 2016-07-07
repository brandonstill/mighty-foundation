# MightyFoundation

MightyFoundation is a template to get started quickly with [ZURB Foundation](http://foundation.zurb.com).

## Quick start

1. Make sure [Node.js](http://nodejs.org) v4.x.x is installed on your machine.
2. Clone or download repo at https://github.com/kungfookenny/mighty-foundation
3. Open the repo or your project folder and run the following commands to install
```
# Install devDependencies for global use (this only needs to be run once.
src/install/init-global

# Symlink devDependencies
src/install/link

# Install dependencies in project folder
npm install --production

# Move dependencies and clean up node_modules folder to save space
src/install/preen
```
4. To compile & minify CSS and Javascript assets use `gulp watch` or `gulp`

## Features

* Basic setup and SASS compiler
* Utilizes NPM, Gulp, SASS
* Includes Zurb Foundation, Motion UI, Font Awesome
* Save storage space by utilizing sym links to devDependencies