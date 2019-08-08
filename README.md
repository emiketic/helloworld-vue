# Hello World Webapp (Vue.js/Vuex)

![](https://img.shields.io/david/emiketic/helloworld-vue.svg?style=for-the-badge)

A boilerplate and reference implementation for web applications built with Vue.js, Vuex, and Vuetify.

## Preview

- http://vue.helloworld.emiketic.com
- Access credentials:
  - email: `client@helloworld.emiketic.com`
  - password: `password`

## Technology

- [Vue.js](https://vuejs.org/v2/guide/)
- [Vuex](https://vuex.vuejs.org/en/)
- [Vue Router](https://router.vuejs.org/en/)
- ...

## Requirements

- [Node.js v10+](https://nodejs.org/)

## Usage

```sh
# install dependencies
npm install

# run app in development on port 8080
npm run serve

# run all tests
npm test

# run unit tests
npm run test:unit

# run end-to-end tests
npm run test:e2e

# build for production
npm run build

# lint code
npm run lint

# format code
npm run format
```

## Debugging

From DevTools

```javascript
// use logger
Logger.debug('Hello World!');

// check if there is an authenticated session
AuthService.isAuthenticated();

// get state from store
$app.$store.state.myField;

// dispatch action from store
$app.$store.dispatch('MyModule/myAction' /* args */);
```

## References

- Tooling
  - [vue-loader](http://vuejs.github.io/vue-loader)
  - [Vue.js Webpack Template](http://vuejs-templates.github.io/webpack/)
- E2E Testing
  - [Nightwatch.js](http://nightwatchjs.org/)
