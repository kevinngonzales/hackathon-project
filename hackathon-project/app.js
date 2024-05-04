import express from 'express'
import { collection } from './src/functions/mongo.js'
import cors from 'cors';

import bcrypt from 'bcrypt'

//import necessary dependancies and the collection we declared which holds our database data

//create an instance of express 
const app = express()



//middleware functions to parse JSON and URL-encoded data in requests and enable cors
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


//route defined to handle get requests to discover enpoint
app.get('/discover', cors(), (req, res) => {


})


//route defiend to handle post requests to the login endpoint 
//checks database if email already exists and returns exist if it does and notexist if it doesn't

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // find the user's email and return notexist if can't be found
        const user = await collection.findOne({ email: email });

        if (!user) {
            return res.json('notexist'); 
        }

        // using bcrypt compare password to hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            res.json({ status: 'exist', name: user.name }); 
        } else {
            res.json('notexist'); 
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('error');
    }
});



//route defiend to handle post requests to the signup endpoint 
//stores email, password, and name in database
//checks database if email already exists and if not it inserts that data to create the user


app.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;

    try {
        // Check if the email already exists in the database
        const existingUser = await collection.findOne({ email: email });

        if (existingUser) {
            return res.json('exist'); // Email already exists
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object with hashed password
        const newUser = new collection({
            email: email,
            password: hashedPassword,
            name: name
        });

        // Save the new user to the database
        await newUser.save();

        res.json('notexist'); // User successfully created
    } catch (error) {
        console.error(error);
        res.status(500).json('error');
    }
});


//start server 
app.listen(8000, () => {
    console.log('Port Connected')
})




