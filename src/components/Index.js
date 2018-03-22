import ListNote from './ListNote.js';
import NoteForm from './NoteForm.js';
class NoteContainer extends React.Component{
      render(){
        return(
          <div>
            <NoteForm/>
            <ListNote/>
          </div>
        )
      }
}
module.exports = NoteContainer;

