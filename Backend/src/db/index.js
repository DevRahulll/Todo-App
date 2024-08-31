import mongoose from "mongoose";

const connectToDb=async()=>{
    try {
       const connectionIstance= await mongoose.connect(`${process.env.DB_URI}`)
       console.log(`\nDatabase connected Successfully !! DB Host:${connectionIstance.connection.host}`);
    } catch (error) {
        console.log("Database Connection Failed ",error);
    }
}


export default connectToDb;