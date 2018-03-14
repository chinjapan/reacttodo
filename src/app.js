var {Provider} = require('react-redux');
var React = require('react');
import NoteStore from './store/NoteStore.js'
var ReactDom = require('react-dom');

import NoteContainer from './components/Index.js';

ReactDom.render(
    <Provider store={NoteStore}>
      <NoteContainer/>
    </Provider>,
    document.getElementById('root')
  );

  