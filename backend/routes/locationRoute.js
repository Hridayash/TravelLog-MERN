import express from "express";
import {
    getLocation,
    getLocations,
    createLocation
} from "../controllers/locationController.js";


const locationRouter = express();

locationRouter.route("/")
    .get(getLocations)
    .post(createLocation);


locationRouter.route("/:locationId")
    .get(getLocation);


export default locationRouter;