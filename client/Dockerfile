# # Docker Image which is used as foundation to create
# # a custom Docker Image with this Dockerfile
# FROM node:10

# # A directory within the virtualized Docker environment
# # Becomes more relevant when using Docker Compose later
# WORKDIR /src/app

# # Copies package.json and package-lock.json to Docker environment
# COPY package*.json ./

# # Installs all node packages
# RUN npm install

# # Copies everything over to Docker environment
# COPY . .

# # Uses port which is used by the actual application
# EXPOSE 3000

# # Finally runs the application
# CMD [ "npm", "start" ]
# ---------------------------------------------------------------------------
# pull official base image
FROM node:14
# FROM node:13.12.0-alpine

# set working directory
WORKDIR /src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]    
# ---------------------------------------------------------------------------
# FROM node:latest

# # Create app directory
# WORKDIR /src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# # If you are building your code for production
# # RUN npm ci --only=production

# # Bundle app source
# COPY . .

# EXPOSE 3000
# CMD [ "node", "server.js" ]