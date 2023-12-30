# FROM node:20-slim AS base
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# RUN npx prisma generate
RUN pnpm prisma generate --schema=./src/prisma/schema.prisma

# RUN pnpm run -r build
RUN pnpm run  build
RUN pnpm deploy --filter=app1 --prod /prod/app1
# RUN pnpm deploy --filter=app2 --prod /prod/app2

FROM base AS app1

LABEL maintainer="Luffy007"

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 app 

RUN adduser --system --uid 1001 node

COPY --from=builder --chown=node:app /usr/src/app/build /prod/app1

# COPY --from=builder --chown=node:app /prod/app1/build /prod/app1

COPY --from=builder --chown=node:app /usr/src/app/node_modules /prod/app1/node_modules

COPY --from=builder --chown=node:app /usr/src/app/package*.json /prod/app1

# COPY --from=builder --chown=node:app /usr/src/app/pnpm-lock.yaml /prod/app1

# Remove or comment out on production
COPY --from=builder --chown=node:app /usr/src/app/.env /prod/app1

# RUN apt-get update && apt-get install -y openssl 

WORKDIR /prod/app1

RUN pnpm add -g pm2@latest

EXPOSE 8001

# CMD [ "pnpm", "run","test" ]
# CMD [ "pm2-runtime", "./build/index.js" ]
CMD [ "pm2-runtime", "index.js" ]

# FROM base AS app2
# COPY --from=build /prod/app2 /prod/app2
# WORKDIR /prod/app2
# EXPOSE 8001
# CMD [ "pnpm", "start" ]


#For reference
# Run the following commands to build images for app1 and app2:

# docker build . --target app1 --tag app1:latest
# docker build . --target app2 --tag app2:latest