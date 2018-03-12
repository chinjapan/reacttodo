var {Provider} = require('react-redux');
var React = require('react');
var Store = require('store');
var ReactDom = require('react-dom');

ReactDom.render(
    <Provider store={Store}>

    </Provider>,
    document.getElementById('root')
  );