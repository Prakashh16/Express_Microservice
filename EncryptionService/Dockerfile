
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY database_encryption.sqlite /app/database_encryption.sqlite

EXPOSE 3003

CMD ["npm", "start"]
