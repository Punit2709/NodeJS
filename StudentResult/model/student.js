const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Student")

const studentSchema = new mongoose.Schema({
    roll:{
        type:Number, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    subjects: {
        Mathematics: {
            type: Number,
            required:true,
            default: 0 
        },
        English: {
            type: Number,
            required:true,
            default: 0
        },
        Science: {
            type: Number,
            required:true,
            default: 0
        },
        History: {
            type: Number,
            required:true,
            default: 0
        },
        Geography: {
            type: Number,
            required:true,
            default: 0
        }
    },
    total_marks: {
        type: Number,
        required: true
    }
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;
