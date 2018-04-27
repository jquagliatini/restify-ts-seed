# Typescript Restify Seed

[![][cc:img]][cc:url]

This is a seed project for any restify REST Api using the Typescript language.

## Batteries included

### Predefined middlewares

This project comes with some predefined middlewares.

[`preflightMiddleware`][file:pm] provides an helper to automatically
register handlers for existing route on `OPTIONS` requests (I personally prefer
preflight, hence the name). I need to write a disclaimer here, it relies heavily
on some reverse-engineering I did by debugging the request inside the middleware.
It may need to change in the future and rely on the API (for example the
`debugInfo` method, see the [ROADMAP](#roadmap)).

[`corsMiddleware`][file:cm] adds [CORS][url:cors] headers to provide a correct
response to the client. At the moment 3 headers are sent as CORS:

* `Access-Control-Allow-Origin`, which is set to `*` by default
  (you may want to change that)
* `Access-Control-Allow-Credentials` which is true all the time. It is
  not the best behaviour, but we might need it, so since it does no harm,
  I just decided to send it all the time
* finally, `Access-Control-Allow-Headers`, which send back each header
  found in the request header: `Access-Control-Request-Headers` and
  any non-forbidden header. A forbidden header is consistent with the
  [fetch specification][url:fetch-spec]

An optimization would be to behave more like `preflightMiddleware`, and only
register allowed headers (since it is why this specification exists). Though,
restify doesn't provide an easy way to centralize this information
(as far as I know). At the moment, the only way to be specific about the
behaviour (headers and CORS) would be to create a specific `opt` route.

[url:cors]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
[url:fetch-spec]: https://fetch.spec.whatwg.org/#forbidden-header-name
[file:cm]: ../blob/master/src/controllers/CorsController.ts
[file:pm]: ../blob/master/src/middlewares/preflightMiddleware.ts

### Configuration

To tweak the behaviour of the server, you may want to use a combination of the
`config.json` file with envvars. It may be of interest that `config.json` has a
prevalence over envvars. If you need to modify this behaviour,
check [`utils/configFactory.ts`][file:cf].

[file:cf]: ../blob/master/src/utils/configFactory.ts

## Usage

To run the project you can use

    npm start

it will launch a `watch` compilation of the typescript files together
with a nodemon process of the `index.js` file.

## Development Configuration

To improve the readability, add the following settings in your `.vscode/settings.json` file
to ignore generated `.js` and `.map` files

```json
{
  "files.exclude": {
    "**/*.js": { "when": "$(basename).ts" },
    "**/*.map": true
  }
}
```

As this project uses prettier, you may want to add also

```json
{
  "editor.formatOnSave": true
}
```

together with the [prettier extension][ext:prettier]

[ext:prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

## Roadmap

* [x] Create a basic working project
* [x] Add a test example
* [ ] Change `preflightMiddleware` to use `debugInfo`
* [ ] Add logging elements
* [ ] Add a data storage (in memory or SQLite)
* [ ] Replace `/hello` route with `/signin`+`/signup` route and JWT
* [ ] Add [Inversify][url:inversify] support

[url:inversify]: https://github.com/inversify/inversify-restify-utils

## License

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc:url]

[cc:url]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc:img]: https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png
