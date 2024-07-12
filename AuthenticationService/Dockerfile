
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY database_auth.sqlite /app/database_auth.sqlite

EXPOSE 3001

CMD ["npm", "start"]
