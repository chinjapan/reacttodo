import React from 'react';
import{connect} from 'react-redux';
import {NoteItem} from './NoteItem.js';
class ListNote extends React.Component{
    render(){
        //React khong cho su dung duoc thuoc tinh key
         return(
           <div>
              {this.props.notes.map((item,i)=><NoteItem index={i} key={i}>{item}</NoteItem>)}
           </div>
         )
       }
}
//Ket noi chia se stage trong store cho component
module.exports = connect(function(stage) {
    return {notes:stage.Notes}
})(List);