FROM node:11.15

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json package.json
RUN npm install
RUN npm install -g serve

COPY . /usr/src/app
ARG REACT_APP_BACK_URL
ENV REACT_APP_BACK_URL $REACT_APP_BACK_URL

RUN npm run build
