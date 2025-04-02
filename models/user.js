const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    hashedPassword: String
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword;   
        // removing from the return object in server memory 
    }  
});

const User = mongoose.model('User', userSchema);
module.exports = User;