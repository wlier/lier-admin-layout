FROM node:alpine AS builder

COPY . /usr/src

WORKDIR /usr/src

# RUN npm config set registry https://registry.npmmirror.com/

# RUN npm install -g npm@8.19.2

# RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=builder /usr/src/build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

EXPOSE 80