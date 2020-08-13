# 000-noop

Simple express app to serve a 403 Forbidden response. Can be used on [Dokku](http://dokku.viewdocs.io/) instances as a default app.

## Requirements
- Node.js 12

Make sure to install all required dependencies by running

```bash
$ npm i
```

## Development

To start developing run

```
$ npm start
```

## Deployment

To setup the app on a fresh dokku instance](https://github.com/dokku/dokku) run the following commands

```
dokku apps:create 0-noop
```
