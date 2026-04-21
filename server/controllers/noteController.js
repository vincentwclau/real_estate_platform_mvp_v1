const asyncErrorHandler = require('../middlewares/helpers/asyncErrorHandler');
const ErrorHandler = require('../utils/errorHandler');

// In-memory storage
let notes = [];
let nextId = 1;

// Create Note - POST /notes
exports.createNote = asyncErrorHandler(async (req, res, next) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return next(new ErrorHandler("Please provide title and content", 400));
    }

    const newNote = {
        id: nextId++,
        title,
        content,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    notes.push(newNote);

    console.log('✅ New note created:', newNote);

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: newNote
    });
});

// Get All Notes - GET /notes
exports.getAllNotes = asyncErrorHandler(async (req, res, next) => {
    console.log(`📋 Retrieved ${notes.length} notes`);

    res.status(200).json({
        success: true,
        count: notes.length,
        notes: notes
    });
});

// Get Single Note - GET /notes/:id
exports.getNoteById = asyncErrorHandler(async (req, res, next) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));

    if (!note) {
        return next(new ErrorHandler(`Note not found with id: ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        note
    });
});

// Update Note - PUT /notes/:id
exports.updateNote = asyncErrorHandler(async (req, res, next) => {
    const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));

    if (noteIndex === -1) {
        return next(new ErrorHandler(`Note not found with id: ${req.params.id}`, 404));
    }

    const { title, content } = req.body;

    notes[noteIndex] = {
        ...notes[noteIndex],
        title: title || notes[noteIndex].title,
        content: content || notes[noteIndex].content,
        updatedAt: new Date().toISOString()
    };

    console.log('✏️ Note updated:', notes[noteIndex]);

    res.status(200).json({
        success: true,
        message: "Note updated successfully",
        note: notes[noteIndex]
    });
});

// Delete Note - DELETE /notes/:id
exports.deleteNote = asyncErrorHandler(async (req, res, next) => {
    const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));

    if (noteIndex === -1) {
        return next(new ErrorHandler(`Note not found with id: ${req.params.id}`, 404));
    }

    const deletedNote = notes[noteIndex];
    notes.splice(noteIndex, 1);

    console.log('🗑️ Note deleted:', deletedNote);

    res.status(200).json({
        success: true,
        message: "Note deleted successfully",
        note: deletedNote
    });
});