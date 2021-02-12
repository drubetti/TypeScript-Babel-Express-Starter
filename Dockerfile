FROM node:fermium-alpine

RUN mkdir /app
COPY . /app
RUN npm install -g npm
RUN npm install -g pm2
RUN cd /app && npm install
RUN cd /app && npm run build:js
RUN rm -rf /app/node_modules
RUN cd /app && npm install --production

WORKDIR /app

CMD ["pm2-runtime", "dist"]
