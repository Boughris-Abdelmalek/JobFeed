FROM node:20-alpine

WORKDIR /app

COPY ./client/package.json ./client/package-lock.json ./

COPY ./client /app

RUN npm install

CMD ["npm", "start"]