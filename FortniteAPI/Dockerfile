FROM node:18-bullseye as node-fortnite-api

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "src/index.js" ]