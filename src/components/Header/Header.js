import React from 'react';
import s from'./Header.module.css'

const Header = () => {
  return (
      <header className={s.header}>
        <img className={s.image} src='https://cdn.worldvectorlogo.com/logos/react.svg' />
      </header>
    );
}

export default Header;
