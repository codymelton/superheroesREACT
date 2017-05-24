//Files in models are usually a schma used to create new Notes for our DB -
// constructor function.

// import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  content: {required: true, type: String}
});

NoteSchema.methods.loadData = function(data){
  this.content = data.content;
}

module.exports = mongoose.model('Note', NoteSchema);
