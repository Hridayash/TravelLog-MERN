import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


dotenv.config();


const app = express();
const port = process.env.PORT || 8000;


app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));
app.use(cookieParser());


app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}/`);
});