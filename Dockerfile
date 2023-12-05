FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn run build

COPY . .

EXPOSE 3000

CMD ["node", "dist/main.js"]
