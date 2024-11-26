FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 4050

CMD ["pnpm", "dev"]

# ! docker build -t patent-ideas-web .
# ! docker run -p 4444:4444 patent-ideas-web
# ! docker run -p 4444:4444 -v $(pwd):/app -v /app/node_modules patent-ideas-web