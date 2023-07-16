import asyncHandler from "express-async-handler";


// POST /api/signup: Route to register a new user.
const signUpUser = asyncHandler( async (request, response) => {

    response.status(200).json({
        message : "Sign Up"
    });

    return;
});

// POST /api/login: Route to authenticate and log in a user.
const signInUser = asyncHandler( async (request, response) => {

    response.status(200).json({
        message : "Sign In"
    });
    
    return;
});

// POST /api/logout: Route to log out the currently authenticated user.
const signOutUser = asyncHandler( async (request, response) => {

    response.status(200).json({
        message : "Sign Out"
    });
    
    return;
});

const refreshToken = asyncHandler( async (request, response) => {

    response.status(200).json({
        message : "Refresh Token"
    });

    return;
});


export {
    signInUser, 
    signOutUser,
    signUpUser,
    refreshToken
};