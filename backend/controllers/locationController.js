import asyncHandler from "express-async-handler";


// GET /api/locations: Route to retrieve a list of all locations or destinations.
const getLocations = asyncHandler( async (request, response) => {
    response.status(200).json({
        message : "get locations"
    });

    return;
});


// POST /api/locations: Route to create a new location.
const createLocation = asyncHandler( async (request, response) => {
    response.status(200).json({
        message : "create locations"
    });
    
    return;
});


// GET /api/locations/:locationId: Route to retrieve a specific location with its details and associated travel logs.
const getLocation = asyncHandler( async (request, response) => {
    response.status(200).json({
        message : "get location"
    });
    
    return;
});


export {
    getLocation,
    createLocation,
    getLocations
}
