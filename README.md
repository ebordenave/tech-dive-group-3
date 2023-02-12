# Hack.Diversity Tech Dive Template

## Getting Started

This skeleton contains two different applications -- a front end, or "client," created with "Create React App," and a back end, or "API," created with Express. 

In order to make both of them work together, you'll need to run both, but you can run just one or the other to start. As you begin working on this project, you'll first focus on the client, so you can more or less ignore the API portion of the code for now.

## Update
Revised the router to depend on children of App.js. View index.js and app.js. 
Added a few components and renamed the some routes.
If you are working on a specific component like Navbar, you can move your html content into the render() function's return of implement it how you'd like.
I also added a modal. So when the admin clicks add, they can enter information. The layout, of the modal is currently unimplemented. It will be a form. 
Make sure you know where things are being called and rendered. I, moses, tried to using intuitive naming so I hope that will be enough to guide you. 
If you get a Modal undefined error, run npm i react-modal. 

## Client
In order to run the client, you'll run the following commands:

```bash
cd client/
npm i
npm start
```

You should then be able to visit `localhost:3000` in your browser and see the client running. If you make changes in the `App.js` file, you should see them reflected.

## Components
To inspect the components
```bash
cd client/src/components
```
NOTE: The ExamsTable component is called in the App.js. No routing has been implemented yet. The router will be contained in App.js and we can use it to route components either from the routes directory or directly from the components directory.

## MongoDb
To run the mongodb script:
```bash
cd client/db
```
Modify the uri to contain your cluster username and password. You can use the mock data from the link provided by copying and pasting the "results: " array and saving them as exams. Then run  
```bash
node mongodb.js 
```
Note, the function calls in the main fuction will execute. 

## Routes
This directory contains functions that call components from the Components directory. 
## API
In order to run the server, you'll run the following commands:

```bash
cd api/
npm i
npm start
```

You should then be able to visit `localhost:9000` in your browser and see the server running.



