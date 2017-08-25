### About 
A Boilerplate for building desktop application based on Electron , React , React-Redux.

![Imgur](http://i.imgur.com/zlWniUI.png)

### Install

First, clone this repo using :

```
git clone https://github.com/mrdck/Electron-ReactRedux-Boilerplate.git your-project-name
```

Next go to your project directory and install dependencies using :

```
cd your-project-name
npm install
```

### Run Scripts

For using React Redux live reload (development):

```
npm start
```

For compiling React Redux project into dist files (production) :

```
npm run production
```

For running electron with live reload :

```
npm run dev
```

For running electron with production (without react live reload) :

```
npm run prod
```

Note: Default port is 8080 in case of using different port you must change it in main.js


### Structure

Main idea of this boilerplate is making everything simple and easy to use thats why whole project structure is small and easy to understand but in same time if someone wants to improve it by adding more packages or changing structure then its easy to achive based on this project.

Here is project structure: 
```
app // React Redux file structure
--actions
--components
--containers
--reducers
--index.html
--index.js
dist // React Redux production directory
--app.bundle.js
--index.html
main.js // Main Electron file
```


### Modules

* React
* Redux
* Styled-Components 💅 !!
* Electron
* Webpack
* Babel with stage-0 







