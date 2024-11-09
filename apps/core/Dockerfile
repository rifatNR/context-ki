FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install --ignore-workspace --no-frozen-lockfile

COPY . .

EXPOSE 3000

RUN pnpm build

CMD ["pnpm", "dev"]

# ! docker build -t patent-ideas-core .
# ! docker run -p 3000:3000 patent-ideas-core
# ! docker run -p 3000:3000 -v $(pwd):/app patent-ideas-core
# ! docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules patent-ideas-core
