# Typescript Restify Seed

[![][cc:img]][cc:url]

This is a seed project for any restify REST Api using the Typescript language.

## Batteries included

This project comes with some predefined middlewares. For example `corsMiddleware`
is here to handle AJAX preflight request from a browser. It implements the fetch
specification, and should provide a correct server response for your frontend
application to preflight it.
The `preflightMiddleware`, on the other side, provides an helper to automatically
register handlers for existing route on `OPTIONS` requests.

To tweak the behaviour of the server, you may want to use a combination of the
`config.json` file with envvars. It may be an interesting point, but `config.json`
has a prevalence over envvars. If you need to modify this behaviour, check in
`utils/configFactory.ts`.

## Usage

To run the project you can use

    npm start

it will launch a `watch` compilation of the typescript files together with a nodemon process of the
`index.js` file.

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
