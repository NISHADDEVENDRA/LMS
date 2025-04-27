import mongoose from "mongoose";
 
//connect to the mongodb database

const connectDB = async () =>{
    try {
        const conn =await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected : ${conn.connection.host}`)
    } catch (error) {
        console.log("Error connection to mongodb",error.message)
        process.exit(1)
    }
}

export default connectDB