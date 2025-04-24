# Stage 1: Build the app
FROM node:18 AS build

WORKDIR /app

# Install dependencies first (faster rebuilds)
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy the rest of the code and build
COPY . .
RUN npm run build

# Stage 2: Serve the build using Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
