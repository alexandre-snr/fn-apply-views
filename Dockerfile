FROM node:14.8

WORKDIR /app
COPY . .
RUN yarn install
CMD yarn start