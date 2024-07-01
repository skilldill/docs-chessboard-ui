FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM httpd:latest AS runtime
COPY --from=dist /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
