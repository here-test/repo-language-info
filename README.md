Here Maps Repository Dashboard
========================

This software allows you to comfortably find which languages are used in Here repositories.

## Installation

### Requirements:

* NodeJS
* Yarn Package manager: [Know more](https://yarnpkg.com/)

#### Optionally:

* http-server [Check here](https://www.npmjs.com/package/http-server)

### Build project

* `yarn`
* `yarn run dev` - for development.
* or `yarn run watch` - to let webpack look into your code changes and repack them immediately
* `yarn run prod` - for production (generates minified, optimized code)

In case you use **http-server** package, just go to project folder after build and run `http-server`.

Now the page will be available in your browser on [http://localhost:8080](http://localhost:8080)

## Tests run

`yarn run test`

## Todo list
- [x] Get data and display it in components
- [x] Use Vue And VueX
- [x] Use ES6
- [x] Use Webpack
- [x] ESLint implemented
- [x] Babel implemented for code and tests
- [ ] Make Karma to work (?)
- [ ] Write proper tests

Unfortunately, I never wrote tests for frontend applications. Used only Behat tests, so I couldn't make Karma work on my available time.

Also I don't know what really to make here mobile friendly. I don't have any design and content to display is too simple and easy to display on any device.

Anyway I included scalability meta header and also implemented Bulma only to make texts look a bit better. Not so much impact but still looks a bit better and it's not a production code :)




