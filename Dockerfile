# PROD CONFIG
FROM node as prod

WORKDIR /app

COPY package*.json ./

RUN npm install

WORKDIR /app/client

COPY ./client/package*.json ./

RUN npm install

WORKDIR /app

COPY . .

ENV NODE_ENV=production

CMD [ "npm", "start" ]

# DATA SEED TO MONGO

FROM mongo as dbseed

COPY ./data.json ./

COPY ./init.sh ./

RUN ["chmod", "+x", "init.sh"]

CMD ./init.sh