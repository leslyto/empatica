# Instructions to run the app

Start by running the server - go to the `backend` folder and do 
```npm install```
and then 
```npm start```
The API server will be available at `http://localhost:3001`


## Run the frontend

Similar to the backend installation, go to the `frontend` folder and do
```npm install```
and then 
```npm start```
This will open the app in the browser at `http://localhost:3000`

## Routes
The app exposes 3 route paths: 

`/`: Root will open up the homepage ( the page given by the designers in the form of mockups - I added a vibrating animation to the watch to mimic the watch notifying about potential seizures).

Clicking on the "Buy Now" button will redirect you to the /login page ( I did that so there's a way to navigate between all pages )

`/login`: The login is just a login button which will send API request to get login data and will forward you to the orders page

`/orders`: The orders page will display the orders for the user id returned from the previous API request to /login. 

The orders page is login protected so you will be redirected if you try to access it manually through the url without going through the login page. 