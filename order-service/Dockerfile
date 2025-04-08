# Use Node.js image
FROM node:16

# Create and set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 5000

# Run the app
CMD ["node", "app.js"]
