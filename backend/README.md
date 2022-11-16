# Backend Breakdown
Breakdown of each folder is below, for ease of use.  

## Routes
- Routes allow us to load different views/pages that the end user sees. Login page, signup page, home page, etc.  
- The routes are hooked up to controller functions, explained below.  

**Files**  
`user.js`: Routes to /login and /signup pages.  
`workout.js`: Routes to page that gets and displays all workouts.


## Controllers
- Controllers are responsible for handling incoming requests and returning responses to the client.  
- This data is interacted with using Mongo DB models, explained below.  

**Files**  
`userController.js`: Creates user accounts in MongoDB upon sign in, and authenticates when a user logs in.  
`workoutController.js`: Gets workouts from MongoDB to display to the end user.


## Models
- Models are where we directly interact with MongoDB to query and write entries to our app database.  
- We define schemas in here, which outline what each entry in our database should look like for both user and workout data.  
- These schemas are then exported to models. These models get used in our controllers, mentioned above.  

**Files**  
`userModel.js`: Schema and model that defines the user data being written to MongoDB. Also includes static methods for user login and signup. Includes password hashing for user signup.  
`workoutInstructionsModel.js`: Schema and model that defines workout Instruction data from MongoDB.  
`workoutModel.js`: Schema and model that defines workout data from MongoDB.


## Middleware
- Middleware are functiones that get called prior to routing the app to a specific page.  
- Does things like authorize users prior to loading certain pages or content.  
**Files**  
`requireAuth.js`: Verifies that users are authenticated and allowed to see user-specific content. Uses jwt tokens for user verification.