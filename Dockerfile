FROM alpine

RUN apk add --update nodejs npm
RUN apk add python

RUN npm -v

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 5000
