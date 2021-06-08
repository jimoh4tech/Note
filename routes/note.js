const express = require('express');

const { getNotes, addNote, updateNote, deleteNote } = require('../controller/note');

const Note = require('../model/Note');


const router = express.Router();

router.route('/').get(getNotes).post(addNote);
router.route('/:id').put(updateNote).delete(deleteNote);

module.exports = router;