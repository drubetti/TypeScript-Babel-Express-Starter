FROM node:fermium-alpine

RUN mkdir /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install -g npm
RUN cd /app && npm install --production
COPY . /app
RUN cd /app && npm run build:js

WORKDIR /app

CMD NODE_ENV=${ENV_NAME} npx forever dist/index.js
