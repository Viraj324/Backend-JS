import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.log(`Server Connected on Port: ${port}`);
    });
})
.catch((err) => {
    console.log("MongoDB connection failed..!!", err);
});






















// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import express from "express";
// const app  = express();
// ( async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error) => {
//             console.log("Error : ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server Running on port : ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("Error : ", error);
//         throw error;
//     }
// })