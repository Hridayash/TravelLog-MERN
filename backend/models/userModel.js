// username: String (required, unique) - The username of the user.
// email: String (required, unique) - The email address of the user.
// password: String (required) - The hashed password of the user.
// profileImage: String - The URL of the user's profile image.
// bio: String - A short bio or description of the user.

import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    profileImage : {
        type : String,
        default : null
    },
    bio : {
        type : String
    }
}, {
    timestamps : true
});

const userModel = mongoose.model("user", userSchema);

export default userModel; 