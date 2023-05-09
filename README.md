# TypeScript-Babel-Express-Starter

### Requirements

- Docker
- Node.js

### Setup

```shell
npm i
```

### Lint code

```shell
npm run lint
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

### Start App

```shell
npm start
```

### Start App in Docker (production mode)

Build the Docker image:

```shell
npm run docker-build
```

Once the image is built, run:

```shell
npm run docker-start
```

The Docker image must be rebuilt on code changes!

### Start App in Docker (development mode)

Build the Docker image:

```shell
npm run docker-build-dev
```

Once the image is built, run:

```shell
npm run docker-start-dev
```

The Docker image can be reused on code changes (the repository is mounted as a volume).
