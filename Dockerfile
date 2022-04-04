FROM node:17
WORKDIR /chesswar/api/src

COPY package*.json ./
RUN npm install
COPY . ./

EXPOSE 8000

CMD node run
