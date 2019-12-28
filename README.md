# universal-vue

> Universal Vue application development boilerplate/ecosystem with nuxt.js.A server-rendered Vue.js app can also be considered “isomorphic” or “universal”, in the sense that the majority of your app’s code runs on both the server and the client

# Nuxt.js

> Nuxt.js is a higher-level framework built on top of the Vue ecosystem which provides an extremely streamlined development experience for writing universal Vue applications.

# Why Nuxt.js

> Nuxt.js is a framework that builds on the SSR features Vue already offers, making it easier to build SSR applications. The         advantages Nuxt brings include:
  - SSR, which helps with SEO, quicker initial page loads
  - Automatic code splitting
  - Static file serving
  - Intelligent defaults and pre-configuration for Vuex, Vue Router and vue-meta
  - Provides a standard folder structure for your application
  - Automatic routing configuration
  - Modular system makes it easy to customize the framework

# Directory Structure

  - components, contain reusable Vue components
  - layouts contain layout components. In this directory, you will find a default.vue file, this file is a component but wraps the     nuxt components. Everything in this file is shared among all other pages while each page content replaces the nuxt component.
  - pages contains the top level views and routes are automatically generated for any .vue file in this directory.
  - store contains Vuex files for state management
  - static contains files that we want to serve exactly as they are for example robots.txt or favicon
  - assets contains our un-compiled assets-things that need to be compiled when you deploy to production for example stylus, SASS,     images, and fonts
  - plugins contains external JavaScript plugins to load before starting the Vue application
  - middleware contains custom functions to run before rendering a layout or page.


## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
