
import mongoose from 'mongoose';
import User from './models/user.js';

mongoose.connect('mongodb://127.0.0.1:27017/nikeapp', {
useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => {
    console.log('MONGO CONNECTION OPEN!!');
})
    .catch((err) => {
        console.log(err)
    });



const seedUsers = 
    {
        username: 'philnguyen',
        email: 'phil.nguy121@gmail.com',
        password: 'Benji2020',
        photoUrl: 'https://i.imgur.com/0B1XdMJ.jpg',
        admin: true,
    }


const seedDB = async () => {
    await User.deleteMany({})
    await User.create(seedUsers)
}

seedDB().then(() => {
    mongoose.connection.close()
})