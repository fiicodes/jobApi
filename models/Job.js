const mongoose =require('mongoose')

const JobSchema =new mongoose.Schema({
    company:{
        type:String,
        required:[true,'Please provide company name'],
        maxlength:50
    },
    position:{
        type:String,
        required:[true,'Please provide position '],
        maxlength:200
    },
    status:{
        type:String,
        enum:['Interview','declined','pending'],
        default:'pending',


    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'please  provide a user']
    }


},{timestamps:true})

module.exports=mongoose.model('Job',JobSchema)