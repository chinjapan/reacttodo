var redux = require('redux');
import reducer from '../reducers/Index.js';

var NoteStore = redux.createStore(reducer, redux.compose(
    window.devToolsExtension?window.devToolsExtension() : f=>f
));
NoteStore.subscribe(()=>{
        let str = store.getState();
        document.getElementById('p-detail').innerHTML = JSON.stringify(str);
    }
)
module.exports = NoteStore;