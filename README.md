![](SearchableTable-1.gif)

# react-redux-test
A test built with react, redux and react-router with the help of webpack.

Contains: 
Implementation details:
*	I used Microsoft Visual Code as an IDE
*	The sample application used the latest React version
*	Other libraries: 
*	React-Router – is used to navigate between the main page and about page
*	Redux – is used to filter the list based on character name
*	Webpack – it is used as the code bundler and loader
*	Babel is used by Webpack to transpile the code
*	JSX is used for React components
*	Styles are coded in SCSS and translated into CSS by a npm plugin
*	Airbnb lint plug-in is used to check for coding style (in addition to regular lint)
*	Bootstrap is used to give the overall style page (buttons for navigation, headers, etc)
*	The application uses also a plug-in for ‘hot-loaded’; if code is changed, the code is automatically updated
*	The application can be built and run in two modes:
	-	Debug mode - using ‘npm start’; this starts the node server and it runs the application from the root path
	-	Production mode – using live-server; the final deployment is done in dist directory, where all the js files are bundled in a single file, and all css files are also bundled in a single file




![](SearchableTable.gif)


## Run the app

0. ```npm install```
0. ```npm start```

Once running, if you want to hide the redux dev monitor: ```CTRL+H```

Yes, it takes a while to load the first time you open the app.

### Is the hot module replacement really working?

Yes! Take a look:

![](bb.gif)

The app updates without the browser having to reload. You don't lose state!

## Build the app
```npm run build```

This will build the app into the "dist" directory in the root of the project. 
It contains the index.html along with the minified assets, ready for production.

![](aa.png)

It should look something like the above image.

## Run the app

The application can run in two modes. 
Development mode using 'npm start'. It will display on the right side a react-redux debug extension 
when in Chrome and Firefox.
Production mode using live-server and running from dist/ directory

