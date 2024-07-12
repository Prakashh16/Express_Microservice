
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY database_userdata.sqlite /app/database_userdata.sqlite

EXPOSE 3005

CMD ["npm", "start"]

