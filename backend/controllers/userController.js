import asyncHandler from "express-async-handler";


// GET /api/profile/:username: Route to retrieve a user's profile information and travel logs.
const getUserProfile = asyncHandler( async (request, response) => {
    response.status(200).json({
        message : "User Profile"
    });
    return;
});

// PUT /api/profile/:username: Route to update a user's profile information.
const updateUserProfile = asyncHandler( async (request, response) => {
    response.status(200).json({
        message : "Update User Profile"
    });
    return;
});

const updateUserPassword = asyncHandler( async (request, response) => {
    response.status(200).json({
        message : "Update user password"
    });
});


export {
    getUserProfile,
    updateUserPassword,
    updateUserProfile
};