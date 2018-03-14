var redux = require('redux');

var Notes = require('./Notes.js');
var ToggleNote = require('./ToggleNote.js');
var reducer = redux.combineReducers({Notes,ToggleNote});

module.exports = reducer;