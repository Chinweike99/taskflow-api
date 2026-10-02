FROM node:24-bookworm-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# prisma generate does not connect to the database, but prisma.config.ts
# requires DATABASE_URL to be set, so a placeholder is enough here.
RUN DATABASE_URL="postgresql://placeholder" npx prisma generate
RUN npm run build


FROM node:24-bookworm-slim AS production

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
