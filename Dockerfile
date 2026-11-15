FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY . .

# Versión publicada (la pasa el CI); vacía en builds locales
ARG APP_VERSION

RUN APP_VERSION=$APP_VERSION npm run build

FROM ghcr.io/rexwithluv/rexwithluv-dev:1.0.0@sha256:1fa1e9692fa63990a927251e706c5ad5330578e71e8c43ed1f395aa06ffff1b8 AS v1

FROM nginx:alpine

LABEL org.opencontainers.image.source="https://github.com/rexwithluv/rexwithluv-dev"

RUN rm /etc/nginx/conf.d/default.conf

RUN rm /usr/share/nginx/html/index.html

COPY nginx.conf /etc/nginx/conf.d/

COPY --from=build /app/build/ /usr/share/nginx/html

COPY --from=v1 /usr/share/nginx/html/v1 /usr/share/nginx/html/v1

CMD ["nginx", "-g", "daemon off;"]
