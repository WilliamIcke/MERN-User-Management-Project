# MERN stack user management application

This is a MERN stack user management application.

Frontend based in React JS located in /client, whereas the backend is Node/Express located in /server.

Currently, the users are populated in to the database using a seeder.
The application will allow the user to amend user details and their membership type where required

## To run the application:

### Requires a local MongoDB installation and is running

Should be as simple as following this, specifically the steps under "Installing and Running MongoDB on a Windows Machine":
[https://treehouse.github.io/installation-guides/windows/mongo-windows.html](https://treehouse.github.io/installation-guides/windows/mongo-windows.html)

Note that the last step "Connect to MongoDB using the Mongo shell" is not required, we only need the mongodb daemon to be running

## Commands for the application itself

Please note this requires npm (Can be done as part of NodeJS installation).

### In the first terminal:  
`npm run first-run-install` - Installs all dependencies (Only needs to be run once during initial setup) 

Run the db seeders using:  
`md-seed run`

I am using the library 'mongoose-data-seed' to handle the seeding.
(For me the terminal complained about not recognising 'md-seed', fixed by installing it globally : 'npm install -g mongoose-data-seed')

Then start up the backend server  
`npm start` - Starts the server

### Then in another terminal: 
`npm run start-client` - Starts the frontend on http://localhost:3000/, accessible via browser (Should auto-open)
 
## Available Scripts

Execute the below scripts from the root:

### `npm start`

Runs the server.  
Defaults port to 3001 

### `npm run start-client`

Starts up the frontend client.
Accessible to view on the local host here: [http://localhost:3000](http://localhost:3000)

### `npm run first-run-install`

Installs the server and client dependencies, only needs to be run once on initial setup.

### `npm run test-client`

Runs the client side tests.

### `npm test`

Runs the server tests, will currently fail (Currently unfinished, but initial testing plan written in relevant files).

### `md-seed run`

Runs the database seeding code

### `md-seed run --dropdb`

Drops the database before seeding

## Further improvements and additions

-	Plan on further improvements and additions
    - Custom memberships
    - Add users
    - What memberships consist of
    - Group memberships
    - Cancel memberships
    - User searching with filters for each field and memberships?
    - Membership subscription options like monthly, yearly. Currently runs until cancelled manually
    - Different user list views and sorting
    - Containerise with docker
    - Cypress for integration tests and user stories
