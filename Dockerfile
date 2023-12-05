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

CMD ["node", "dist/main.js"]