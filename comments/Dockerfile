# Specify base image
FROM node:14-alpine

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