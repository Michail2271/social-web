
let State={
    profilePage:{ 
    posts:[
        {id :1, message: 'hello',likesCount: 12},
        {id :2, message: 'my first post',likesCount:19}
        ]},
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
]}
}

export let addPost =(postMessage)=> {
    let newPost = {id:5,message:postMessage,likesCount:0}
    State.profilePage.posts.push(newPost);

}

export default State;