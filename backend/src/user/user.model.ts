import mongoose, { Schema, Document} from "mongoose";

export interface Iuser extends Document{
    name:string;
    profession ?:string;
    dateNasc?:string;
    resume?:string;
    linkPortfolio?:string;
    email:string;
    password:string;
    createdAt:string
    access_token?:string;
    confirmPassword?:string
}


const User:Schema = new mongoose.Schema({
    name: { 
        type: String, 
        require: true }
        ,
    avatar: { 
        type: String, 
        require: true }
        ,
    profession:{ 
        type: String, 
        require: true 
    },
    dateNasc:{ 
        type: String, 
        require: true 
    },
    resume:{ 
        type: String, 
        require: true 
    },
    linkPortfolio:{ 
        type: String, 
        require: true 
    },
    email:{ 
        type: String, 
        unique: true,
        require: true 
    },
    password:{ 
        type: String, 
        require: true 
    },
    access_token: {
        type: String,
        
    },
    createdAt:{ 
        type: String, 
        require: true 
    }
})

export default mongoose.model<Iuser>("User",User,"users")


