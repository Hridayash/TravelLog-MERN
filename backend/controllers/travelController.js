import asyncHandler from "express-async-handler";
import travelModel from "../models/travelModel.js";

// GET /api/logs: Route to retrieve a list of all travel logs.
const getTravelLogs = asyncHandler(async (request, response) => {
    const logs = await travelModel.find({ user_id : request.user._id });

    response.status(200).json({
        travelLogs : logs
    });
    return;
});

// POST /api/logs: Route to create a new travel log.
const createTravelLog = asyncHandler(async (request, response) => {
    response.status(200).json({
        message : "create travel log"
    });
    return;
});

// GET /api/logs/:logId: Route to retrieve a specific travel log with its details and photos.
const getTravelLog = asyncHandler(async (request, response) => {
    const { logId } = request.params;
    const log = await travelModel.findOne({
        _id : logId, user_id : request.user._id
    });

    response.status(200).json({
        travelLog : log
    });
    return;
});

// PUT /api/logs/:logId: Route to update a specific travel log.
const updateTravelLog = asyncHandler(async (request, response) => {
    response.status(200).json({
        message : "update travel log"
    });
    return;
});

// DELETE /api/logs/:logId: Route to delete a specific travel log.
const deleteTravelLog = asyncHandler(async (request, response) => {
    response.status(200).json({
        message : "delete travel log"
    });
    return;
});


export {
    getTravelLogs,
    createTravelLog,
    getTravelLog,
    updateTravelLog,
    deleteTravelLog
};

