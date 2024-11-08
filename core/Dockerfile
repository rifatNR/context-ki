FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# ! docker build -t ideas-patent .
# ! docker run -p 3000:3000 ideas-patent
# ! docker run -p 3000:3000 -v $(pwd):/app ideas-patent
# ! docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules ideas-patent
