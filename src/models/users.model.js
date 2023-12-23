import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            minLength:[3,'username should be atleast 3 characters'],
            maxLength:[20,'username should not be greater than 20 characters'],
            lowercase:true,
            trim:true,
            match: /^[a-zA-Z0-9_-]+$/
        },
        email:{
            type:String,
            required:true,
            unique:true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            maxLength:100,
            lowercase:true,
            trim:true

        },
        password:{
            type:String,
            required:true,
            minLength:8,
            maxLength:128,
            validate:{
                validator:function (value){
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
                },
                message: 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.'
            }

        },
        tasks:{
            type:[mongoose.Schema.Types.ObjectId],
            ref:"Task"
        },
    },
    {timestamps:true}
)

const User = mongoose.model("User",userSchema)

export default User
