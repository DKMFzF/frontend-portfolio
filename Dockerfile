FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm i --force

COPY . .

RUN npm run build

#FROM node:20-alpine

#WORKDIR /app

#COPY --from=build /app /app

ENV NODE_ENV=production

EXPOSE 8081

CMD ["node", "server.js"]

