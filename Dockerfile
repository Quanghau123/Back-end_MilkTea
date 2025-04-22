FROM node:23-alpine

# Set the working directory inside the container
WORKDIR /quanghau/backend

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies (including build tools like Python and gcc)
RUN apk update && apk add --no-cache python3 py3-pip build-base && npm install

# Install Babel and Nodemon globally
RUN npm install -g @babel/core @babel/cli

# Copy only the src folder into the container
COPY . .

# Build the source files
RUN npm run build-src

# Start the app
CMD ["npm", "run", "build"]

# docker build --tag node-docker .
# docker run - p 5000:5000 -d node-docker