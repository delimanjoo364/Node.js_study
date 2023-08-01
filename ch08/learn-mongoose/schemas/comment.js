//comment.js

const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types:{ ObjectId }} = Schema;
const commentSchema = new Schema({
    commenter:{
        type: ObjectId,
        required: true,
        ref: 'User',    //User 스키마의 사용자 ObjectId가 commenter에 들어감
    },
    comment:{
        type: String,
        required: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('Comment',commentSchema);