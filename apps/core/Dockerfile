FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install --ignore-workspace --no-frozen-lockfile

COPY . .

EXPOSE 3333

RUN pnpm build

CMD ["pnpm", "dev"]

# ! docker build -t patent-ideas-core .
# ! docker run -p 3333:3333 patent-ideas-core
# ! docker run -p 3333:3333 -v $(pwd):/app patent-ideas-core
# ! docker run -p 3333:3333 -v $(pwd):/app -v /app/node_modules patent-ideas-core
