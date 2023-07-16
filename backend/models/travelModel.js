// title: String (required) - The title of the travel log.
// description: String - A brief description of the travel log.
// location: String - The location or destination of the travel log.
// photos: Array of Strings - URLs of the photos associated with the travel log.
// date: Date - The date of the travel log.
// author: Reference to User Model - The user who created the travel log.


import mongoose from "mongoose";


const travelSchema = mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    location_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "location"
    },

    title : {
        type : String,
        required : true, 
        unique : true
    },
    description : { type : String },
    location : { type : String },
    photos : [{type :String}],
    author : { type : String }
}, {
    timestamps : true
});


const travelModel = mongoose.model("travel", travelSchema);

export default travelModel;