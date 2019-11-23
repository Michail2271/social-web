import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className='background-image' src='https://join.easybooking.lk/wp-content/uploads/2017/08/Banner-3.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava + discription
        </div>
    </div>

  );
}

export default ProfileInfo;
