import mongoose from "mongoose"

const taskSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            minLength:1,
            maxLength:255
        },
        description:{
            type:String,
            maxLength:1000
        },
        category:{
            type:String,
            required:true,
            enum:['Work','Personal','Shopping']
        },
        dueDate:Date,
        priority:{
            type:String,
            enum:['Low','Medium','High'],
            required:true
        },
        completed:{
            type:String,
            default:false
        },
        // user:{
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:"User"
        // }
    },
    {timestamps:true}
)

const Task = mongoose.model("Task",taskSchema)

export default Task