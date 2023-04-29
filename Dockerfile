FROM node:16-alpine as build
WORKDIR usr/share/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build usr/share/app/build .
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
