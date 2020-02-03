const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'



const dialogsReducer = (state,action) =>{


    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      state.newMessageBody = action.body;
    }
    else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        state.messages.push({id:6,message: body})
        state.newMessageBody = '';
    }


    return state;
}


export default dialogsReducer;