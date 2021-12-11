FROM node:gallium-alpine

RUN npm install -g npm
RUN apk add --no-cache bash
WORKDIR /app

CMD ["bash"]
