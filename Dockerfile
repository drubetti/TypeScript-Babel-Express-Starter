FROM node:jod-alpine

RUN npm install -g npm
RUN npm install -g pm2
RUN mkdir /app
COPY . /app
RUN cd /app && npm ci
RUN cd /app && npm run build:js

WORKDIR /app

CMD ["pm2-runtime", "dist"]
