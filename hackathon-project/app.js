import express from 'express'
import { collection } from './src/functions/mongo.js'
import cors from 'cors';

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
    const { email, password } = req.body

    try {

        const check = await collection.findOne({ email: email })

        if (check) {
            res.json('exist')
        } else {
            res.json('notexist')
        }

    } catch (e) {
        res.json('notexist')
    }

})



//route defiend to handle post requests to the signup endpoint 
//stores email, password, and name in database
//checks database if email already exists and if not it inserts that data to create the user
app.post('/signup', async (req, res) => {
    const { email, password, name } = req.body


    const data = {
        email: email,
        password: password,
        name: name
    }

    try {

        const check = await collection.findOne({ email: email })

        if (check) {
            res.json('exist')
        } else {
            res.json('notexist')
            await collection.insertMany([data])
        }

    } catch (e) {
        res.json('notexist')
    }

})


//starts server 
app.listen(8000, () => {
    console.log('port connected')
})




