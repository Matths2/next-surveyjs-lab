FROM node:20-alpine

# Create the directory on the node image 
# where our Next.js app will live
RUN mkdir -p /app

# Set /app as the working directory
WORKDIR /app

COPY package*.json /app 

RUN npm ci

COPY . /app

EXPOSE 3000

ENV WATCHPACK_POLLING true

CMD ["npm", "run", "dev"]
