FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY . .

RUN npm run build

FROM scratch AS v1src

ADD https://github.com/rexwithluv/rexwithluv-dev.git#v1.0.0 /

FROM node:22-alpine AS build-v1

WORKDIR /app

COPY --from=v1src /package*.json ./

RUN npm install

COPY --from=v1src / .

RUN BASE_PATH=/v1 npm run build

FROM nginx:alpine

LABEL org.opencontainers.image.source="https://github.com/rexwithluv/rexwithluv-dev"

RUN rm /etc/nginx/conf.d/default.conf

RUN rm /usr/share/nginx/html/index.html

COPY nginx.conf /etc/nginx/conf.d/

COPY --from=build /app/build/ /usr/share/nginx/html

COPY --from=build-v1 /app/build/ /usr/share/nginx/html/v1

CMD ["nginx", "-g", "daemon off;"]
