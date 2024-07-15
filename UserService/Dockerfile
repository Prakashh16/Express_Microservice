FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY database_user.sqlite /app/database_user.sqlite

EXPOSE 3005

CMD ["npm", "start"]
