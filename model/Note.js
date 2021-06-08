const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['life', 'school', 'work', 'plan']
    },
    text: {
        type: String,
        required: [true, 'Please add a text']
    }
}, { timestamps: true });


module.exports = mongoose.model('Note', NoteSchema);