## About the Webapp
This web app was built using the MERN Stack (MongoDB, Express, React, NodeJS) to create a scalable web app consisting of front-end, back-end, and database components.  
- MongoDB: Our database system
- Express: Backend server framework for NodeJS
- React: Creating front end interfaces, uses MaterialUI
- NodeJS: Framework for executing JS code for scalable network applications

## Running the Server
Navigate the the **server** directory in your terminal and enter: **node server.js**

## What our Server is capturing and sending to MongoDB
The server pushes to the **user_data** database and pushes to the **users** collection and **sessions** collection

### The users collection
The **users** collection pulls every registered account as a document which contains their unique id, email, username, password, and password confirmation 

### The sessions collection
The **sessions** collection is used to capture the session cookies of accounts that are signed-in