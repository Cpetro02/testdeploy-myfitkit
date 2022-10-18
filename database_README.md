## Running the Server
Navigate the the **server** directory in your terminal and enter: **node server.js**

## What our Server is capturing and sending to MongoDB
The server pushes to the **user_data** database and pushes to the **users** collection and **sessions** collection

### The users collection
The **users** collection pulls every registered account as a document which contains their unique id, email, username, password, and password confirmation 

### The sessions collection
The **sessions** collection is used to capture the session cookies of accounts that are signed-in