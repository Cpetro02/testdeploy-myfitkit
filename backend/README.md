# ABOUT: Backend Folder
Breakdown of each folder is below, for ease of use.  

### Routes
Routes hold the 'links' to different pages that the end user sees. Login page, signup page, home page, etc.  
The routes are hooked up to controller functions, explained below.
### Controllers
Controllers are responsible for handling incoming requests and returning responses to the client.  
This data is interacted with using Mongo DB models, explained below.
### Models
Models are where we directly interact with MongoDB to query and write entries to our app database.  
We define schemas in here, which outline what each entry in our database should look like for both user and workout data.  
These schemas are then exported to models. These models get used in our controllers, mentioned above.
### Middleware
Middleware are functiones that get called prior to routing the app to a specific page.  
Does things like authorize users prior to loading certain pages or content.