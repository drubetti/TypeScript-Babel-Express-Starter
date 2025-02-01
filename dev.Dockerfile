FROM node:jod-alpine

RUN npm install -g npm
RUN npm install -g pm2
RUN apk add --no-cache bash
WORKDIR /app

CMD ["bash"]
