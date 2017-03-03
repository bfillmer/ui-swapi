
# docker build -t bfillmer/ui-swapi:tag .
# docker push bfillmer/ui-swapi:tag
# docker run -p 3000:3000 -d bfillmer/ui-swapi:tag

# Start with Node
FROM node:boron

# Install Yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Make yarn available to SH
ENV PATH="/root/.yarn/bin:${PATH}"

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn

# Bundle app source
COPY . /usr/src/app/

# Expose the correct port for our server.
EXPOSE 3000

# Start the server when container initialized.
CMD [ "yarn", "start" ]
