import express from "express";
import {
    getTravelLog,
    getTravelLogs,
    updateTravelLog,
    deleteTravelLog,
    createTravelLog
} from "../controllers/travelController.js";
import {
    authRequired
} from "../middleware/authMiddleware.js";


const travelRouter = express();


travelRouter.route("/")
    .get(authRequired, getTravelLogs)
    .post(authRequired, createTravelLog);

travelRouter.route("/:logId")
    .get(authRequired, getTravelLog)
    .put(authRequired, updateTravelLog)
    .delete(authRequired, deleteTravelLog);


export default travelRouter;