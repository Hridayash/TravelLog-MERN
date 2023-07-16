import express from "express";
import {
    getUserProfile,
    updateUserProfile,
    updateUserPassword
} from "../controllers/userController.js";


const userRouter = express();


userRouter.route("/:username")
    .get(getUserProfile)
    .put(updateUserProfile)
    .patch(updateUserPassword);


export default userRouter;