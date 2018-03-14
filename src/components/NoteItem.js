import React from 'react';
import{connect} from 'react-redux';
import {removeItem} from '../actions/Note.js';
class NoteItem extends React.Component{
   
    removeNode(){
        var {index,dispatch} = this.props;
        dispatch(removeItem(index)); // ben trong react-redux, nen can use connet()(NoteItem)
      }
      render(){
        return(
          <div>
            <p>{this.props.children}</p>
            <button onClick = {this.removeNode.bind(this)}>Delete</button>
          </div>
        )
      }
}

module.exports = connect()(NoteItem);

