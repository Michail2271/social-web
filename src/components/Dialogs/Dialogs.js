import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateMessageBodyCreator, sendMessageCreator } from '../../Redux/state';





const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    
    let messagesElements = state.messages
       .map ( (m) => <Message message={m.message}/>);
    let dialogsElements = state.dialogs
       .map( (d) => <DialogsItem name={d.name} id={d.id} />);
    let newMessageBody = state.newMessageBody;
   
    
    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) =>{
        let body = e.target.value
        props.store.dispatch(updateMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements} </div>
              <div>
                <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                <div><button onClick={onSendMessageClick}>send</button></div>
              </div>
            </div>
        </div>
    )
}




export default Dialogs; 