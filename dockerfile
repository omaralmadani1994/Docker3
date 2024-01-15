FROM node:16 as base


FROM base as devlopment


WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm","run","start-dev" ]


FROM base as production


WORKDIR /app

COPY package.json .

RUN npm install --only=production

COPY . .

CMD [ "npm","start" ]


