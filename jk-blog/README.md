# instructions to run the project 
## 1. Switch to branch develop to get the latest changes
## 2. Add an environment file to the project
Add a .env file in the api folder (at the top of your api folder, so nest can find it)  
 - add your own DATABASE_URL in the .env file
 - add your own JWT_SECRET in the .env file

    DATABASE_URL=<your url>  
    JWT_SECRET=tanujkumar@12345

## Start the Backend in dev Mode after you added the .env file
`cd server`  
`npm install`  
`npm run start:dev`  
  
## Start the Frontend in dev Mode after you added the .env file
`cd ui`    
`npm install`  
`ng serve`  

## Start the e2e tests
`cd e2e`    
`npm install`  
`npm run cypress:open`
### Generate e2e Report (html)
`npm run cypress:report`
