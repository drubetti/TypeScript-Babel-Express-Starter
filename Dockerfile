FROM node:gallium-alpine

RUN mkdir /app
COPY . /app
RUN npm install -g npm
RUN npm install -g pm2
RUN cd /app && npm ci
RUN cd /app && npm run build:js

WORKDIR /app

CMD ["pm2-runtime", "dist"]
