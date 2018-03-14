var Notes = (state = ['Android','iOS','NodeJs'], action) =>{
    switch(action.type)
    {
        case 'ADD_ITEM':
            return [...state, action.item];
        case 'REMOVE_ITEM':
            return state.filter((e,i)=> i != action.index);
        default:
            return state;
    }
}
module.exports = Notes;