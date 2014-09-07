# Basic Sample

This is the code that i created while following the `todomvc-flux` tutorial. Hope this helps someone :smile:

## Messing Around

Just initialize a local webserver (`http-server`) and then go to the index page to see what's going on.

If you want to build it from scratch:

```sh
$ npm install
$ gulp build
```

## Style Guide

As i am a very newbie regarding React and Flux stuff (this is actually the first time i'm writing something on this topic), i'll try to follow as much as i can the style guide that i got from the Facebook sample, with some minor diffs.

Khan Academy open sources [their react's style](https://sites.google.com/a/khanacademy.org/forge/for-developers/styleguide/react) guide, worth reading :smile:

### React.createClass

1. Start with lifecycle methods, then handlers and custom methods. Finalize with the `render` methods.

2. Name handlers prefixing them with `handle`;

3. use [es6's property method assignment](https://github.com/google/traceur-compiler/wiki/LanguageFeatures#property-method-assignment) and [es6's arrow functions](https://github.com/google/traceur-compiler/wiki/LanguageFeatures#arrow-functions) whenever we'd use an anonymous function.


