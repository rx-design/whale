FROM node:lts-alpine AS build

WORKDIR /app

COPY package*.json /app

RUN npm ci --no-audit --ignore-scripts

COPY . /app

RUN npm run build

FROM node:lts-alpine

WORKDIR /app

COPY --from=build /app/.output /app

EXPOSE 3000

CMD ["node", "server/index.mjs"]
