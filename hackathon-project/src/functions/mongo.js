import mongoose from 'mongoose';



//connect to MongoDB database using database url (usually stored in env file but was not working, temporarily hardcoding it)

mongoose.connect('mongodb+srv://kevinngstem:77TUpi6k5ohHoK6q@hackathon-project.aorxavu.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });


    
//create a model that contains email, password, and name as properties

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    }
});

// create a model based on the schema we defined previously 

const collection = mongoose.model('User', userSchema);

export { collection } 