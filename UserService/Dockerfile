
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY database_user.sqlite /app/database_auth.sqlite

EXPOSE 3002

CMD ["npm", "start"]

