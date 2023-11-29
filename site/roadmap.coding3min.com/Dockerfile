FROM node:20.3.1 AS BUILD_IMAGE

WORKDIR /app

COPY . .

RUN npm install && npm run build

# remove development dependencies
RUN npm prune --production

EXPOSE 8080

FROM node:20.3.1-alpine

COPY --from=BUILD_IMAGE /app/dist ./dist
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules

RUN npm i -g http-server

CMD http-server ./dist
