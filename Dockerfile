FROM node:14.17

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn add nodemon

EXPOSE 9000

CMD [ "npm" , "start" ]