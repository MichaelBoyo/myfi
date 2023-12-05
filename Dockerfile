FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .

RUN yarn run build

FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/dist ./

EXPOSE 3000

RUN ls -al

CMD ["node", "main.js"]