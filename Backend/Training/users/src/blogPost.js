const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    content: String,
    // connecting reference to another collection
    comments: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Comment'
    }]

})