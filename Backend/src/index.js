import { app } from "./app.js";
import dotenv from 'dotenv';
import connectDB from "./db/index.js"

dotenv.config({
    path:"./.env"
})

const PORT=process.env.PORT||7000;

connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running at PORT:${PORT}`);
})