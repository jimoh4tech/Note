const path = require('path');
const Note = require('../model/Note');

// @Desc    Get all notes
// @route   GET api/v1/notes
// @access  Public
exports.getNotes = async (req, res, next) => {
    const notes = await Note.find();

    res.status(200).json({
        success: true,
        count: notes.length,
        data: notes
    });
};


// @Desc    Add note
// @route   POST api/v1/note
// @access  Public
exports.addNote = async (req, res, next) => {

    const note = await Note.create(req.body);

    res.status(200).json({
        success: true,
        data: note
    });
};


// @Desc    Udapte note
// @route   PUT api/v1/note/:id
// @access  Public
exports.updateNote = async (req, res, next) => {

    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: note
    });
};

// @Desc    Delete note
// @route   DELETE api/v1/note/:id
// @access  Public
exports.deleteNote = async (req, res, next) => {

    const note = await Note.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        data: {}
    });
};