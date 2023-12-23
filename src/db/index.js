import mongoose from "mongoose"

const connectDB = async (uri)=>{
    try {
        await mongoose.connect(uri)
    } catch (error) {
        throw new Error('error while connecting to db')
    }
}

export default connectDB