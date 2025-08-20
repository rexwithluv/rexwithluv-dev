FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

LABEL org.opencontainers.image.source="https://github.com/rexwithluv/rexwithluv-dev"

RUN rm /etc/nginx/conf.d/default.conf

RUN rm /usr/share/nginx/html/index.html

COPY nginx.conf /etc/nginx/conf.d/

COPY --from=build /app/build/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]