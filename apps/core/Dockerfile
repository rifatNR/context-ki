#Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install --ignore-workspace --no-frozen-lockfile

COPY . .

EXPOSE 3000

RUN pnpm build

#Production stage
FROM node:20-alpine AS production

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install --no-frozen-lockfile --prod

COPY --from=build /app/dist ./dist

CMD ["node", "./dist/app.js"]
# CMD ["pnpm", "start"]

# ! docker build -t patent-ideas-core .
# ! docker run -p 3000:3000 patent-ideas-core
# ! docker run -p 3000:3000 -v $(pwd):/app patent-ideas-core
# ! docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules patent-ideas-core
