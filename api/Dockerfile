FROM node:18-alpine
WORKDIR /usr/src/app

# copy package files first and install dependencies
COPY package*.json ./
RUN npm ci --silent

# copy prisma schema and generate client early (cache layer)
COPY prisma ./prisma
RUN npx prisma generate || true

# copy rest of source and build
COPY . .
RUN npm run build

EXPOSE 4000
CMD ["node", "dist/main.js"]
