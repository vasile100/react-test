![](SearchableTable-1.gif)

# react-redux-test
A test built with react, redux and react-router with the help of webpack.

Contains: 

* a working example of a filterable table which you can play around with (look below).
* ES6 - 7 Support with Babel
* Redux dev tools to help you keep track of the app's state
* Routing
* hot module replacement support so you can change modules or react components without having to reload the browser
* a webpack production config so you can build the app and make it ready for production
* Sass support, just import your styles wherever you need them
* eslint to keep your js readable
* much more...



![](SearchableTable.gif)


## Run the app

0. ```npm install```
0. ```npm start```

Once running, if you want to hide the redux dev monitor: ```CTRL+H```

Yes, it takes a while to load the first time you open the app.

### Is the hot module replacement really working?

Yes! Take a look:
http://stackoverflow.com/questions/22876978/loop-inside-react-jsx
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

