FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

# LABEL org.opencontainers.image.source="https://github.com/rexwithluv/rexwithluv-dev"

COPY --from=build /app/build/ /app/build/

CMD ["nginx", "-g", "daemon off;"]