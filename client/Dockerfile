# Specify base image
FROM node:14-alpine

# Changes needed due to create-react-app not running correctly inside Docker containers
ENV CI=true
ENV WDS_SOCKET_PORT=0

# Setting work directory for files added to container
WORKDIR /app

# Copy package.json so RUN npm install won't rerun on rebuild when any of files change
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy source files to container from dir (./) to dir (./)
COPY ./ ./

# Default command
CMD ["npm", "start"]