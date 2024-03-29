FROM node:11

WORKDIR /home/node/app
COPY package*.json /home/node/app/
COPY Makefile /home/node/app/
RUN npm install

CMD npm start
EXPOSE 9000
