# TypeScript-Babel-Express-Starter

### Requirements

- Docker
- Node.js

### Setup

```shell
npm i
```

### Static Type Check

```shell
npm run type-check
```

### Run Tests

```shell
npm t
```

### Build JavaScript code

```shell
npm run build:js
```

Built code will be put in `dist` folder.

### Start App (AOT compilation)

Build JavaScript code, then run:

```shell
node dist
```

### Start App (on-the-fly compilation)

```shell
npm start
```

### Start App in Docker (AOT compilation)

Build the Docker image:

```shell
npm run docker-build
```

Once the image is build, run:

```shell
npm run docker-start
```

The Docker image must be rebuilt on code changes!

### Start App in Docker (on-the-fly compilation)

Build the Docker image:

```shell
npm run docker-build-dev
```

Once the image is build, run:

```shell
npm run docker-start-dev
```

or (for "watch" mode):

```shell
npm run docker-watch
```

The Docker image can be reused on code changes (the repository is mounted as a volume).
