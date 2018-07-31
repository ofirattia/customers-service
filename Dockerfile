FROM node:7.5.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set proxy=null
RUN npm config set http_proxy=null
RUN npm config set https-proxy=null

RUN npm install g json-server
RUN npm install
COPY ./src ./src

EXPOSE 3000

CMD ["npm", "start"]
