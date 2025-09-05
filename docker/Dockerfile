# prod stages

# Stage 1: build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

# из-за специфики библиотек которые работают с webgl
#------------------------------------------------------
# due to the specifics of libraries that work with WebGL
RUN npm i --force

COPY . .

RUN npm run build

# Stage 2: runtime in server

FROM node:20-alpine

WORKDIR /app

# copy necessary files for start
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

# donwload prod dep
RUN npm i --force

# copy builds and bff
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./

ENV NODE_ENV=production

EXPOSE 8081

HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost:8081/ || exit 1

CMD ["node", "server.js"]
