FROM 746147974374.dkr.ecr.us-east-1.amazonaws.com/node10
WORKDIR /usr/src/app
COPY package*.json app.js ./
RUN npm install
EXPOSE 80
CMD ["node", "app.js"]