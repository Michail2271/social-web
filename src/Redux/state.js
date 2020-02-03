import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state:{
        profilePage:{ 
        posts:[
            {id :1, message: 'hello',likesCount: 0},
            {id :2, message: 'my first post',likesCount:0}
            ],
            newPostText:'hello'}, 
       dialogsPage:{ 
        messages:[
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is it-kamasutra?' },
        { id: 3, message: 'Yoo' },
        { id: 4, message: 'Yoo' },
        { id: 5, message: 'Yoo' }
    ],
       dialogs:[
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ],
    newMessageBody:''
},
        sidebar:{},
    }, 
        
    _callSubscriber () {
        console.log('state changed')
    },


    getState (){     
            return this._state
        },
    subscribe (observer) {
            this._callSubscriber = observer
        },


    dispatch(action){

      this._state.profilePage = profileReducer(this._state.profilePage,action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
      this._state.sidebar = sidebarReducer (this._state.sidebar,action)
            this._callSubscriber(this._state)
        }
    }



export const AddPostActionCreator = () =>{
    return{
      type: ADD_POST
    }
  }
export const updateNewPostTextActionCreator = (text) =>{
     return{
       type: UPDATE_NEW_POST_TEXT,
       newtext:text
     }   
  }
export const sendMessageCreator = () =>{
    return{
      type: SEND_MESSAGE
    }
  }
export const updateMessageBodyCreator = (body) =>{
     return{
       type: UPDATE_NEW_MESSAGE_TEXT,
       body:body
     }   
  }


export default store;
window.store = store;