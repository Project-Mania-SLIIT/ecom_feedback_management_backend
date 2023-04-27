FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
EXPOSE 5003
ENTRYPOINT ["yarn"]
CMD ["k8s"]