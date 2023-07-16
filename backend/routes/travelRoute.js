import express from "express";
import {
    getTravelLog,
    getTravelLogs,
    updateTravelLog,
    deleteTravelLog,
    createTravelLog
} from "../controllers/travelController.js";


const travelRouter = express();


travelRouter.route("/")
    .get(getTravelLogs)
    .post(createTravelLog);

travelRouter.route("/:logId")
    .get(getTravelLog)
    .put(updateTravelLog)
    .delete(deleteTravelLog);


export default travelRouter;