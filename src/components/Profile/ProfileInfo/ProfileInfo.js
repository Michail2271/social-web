import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.backPhoto} src='https://cs8.pikabu.ru/post_img/big/2018/03/08/9/15205200051669284.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava + discription
        </div>
    </div>

  );
}

export default ProfileInfo;
