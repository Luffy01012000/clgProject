FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package*.json ./

RUN npm install

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

# RUN npx prisma generate
COPY src/prisma ./prisma

RUN npx prisma generate

RUN npm run build

FROM base AS runner

LABEL maintainer="Luffy007"

WORKDIR /home/nodeapp

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs 

RUN adduser --system --uid 1001 nodeapp

# COPY --from=builder --chown=nodeapp:nodejs /app ./

COPY --from=builder --chown=nodeapp:nodejs /app/node_modules ./node_modules

COPY --from=builder --chown=nodeapp:nodejs /app/build ./

COPY --chown=nodeapp:nodejs package.json ./

# RUN npm i pm2 -g

# RUN apk add curl 

USER nodeapp

EXPOSE 8001

# RUN pm2 start index.js
CMD [ "pm2-runtime","index.js" ]

# CMD [ "node","index.js" ]

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# WORKDIR /home/node/app

# COPY package*.json ./

# USER node

# RUN npm install

# COPY --chown=node:node . .

# EXPOSE 8001

# CMD [ "node", "app.js" ]