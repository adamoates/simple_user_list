FROM node:latest

WORKDIR /simple_user_list

COPY package*.json /simple_user_list

RUN npm install

COPY . /simple_user_list

EXPOSE 3000

CMD [ "npm", "start"]