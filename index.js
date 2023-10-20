//Check List

//1. Create Project Folder
//2. Creating package.json
//3. Create package.json file
//3a   In the terminal type: npm init 
//3b. Complete additional steps for package.json document. 
//3(z). Once package.json is complete, type: yes.
// The package.json is not complete.
//5. Create index.js file
// type: touch index.js
// Javascript file is complete.
//REMEMBER TO RUN THE INDEX.JS FILE
//node index.js
//also run the Nodemon to update the serve with the index.js file.
//nodemon
//6 Create HTML file
// type: touch index.html



//Import express to init the app variable
const express = require('express')
require('dotenv').config()
const app = express()

//Add some routes (aka paths) to respond from
// Declare routes that people can visit on the application.

app.get('/', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px; display: flex; solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `)
})


// Color Page
app.get('/:color', function (req, res) {
    let myColor = req.params.color
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px; display: flex; solid black; height: 100px; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${myColor.charAt(0).toUpperCase() + myColor.slice(1)} Page</h1>
        </body>
    `)
})



app.listen(process.env.PORT);