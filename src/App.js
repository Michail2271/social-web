import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/NavBar/Nav';
import {BrowserRouter, Route } from 'react-router-dom'
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> } />
          <Route path='/profile' render={ () => <Profile addPost={props.addPost} state={props.state.profilePage}/> } />
          <Route path='/news' render={ () => <News/> } />
          <Route path='/music' render={ () => <Music/> } />
          <Route path='/settings' render={ () => <Settings/> } />
        </div>
      </div>
)
}

export default App;


