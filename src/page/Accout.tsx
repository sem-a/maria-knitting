import React, { useState, useEffect } from 'react';
import Auth from '../components/Login';
import Header from '../components/Header';
import User from '../components/User';
import { useSelector } from 'react-redux';

function Account() {
  const [isAuth, setIsAuth] = useState();

  const user = useSelector((state: any) => state.user.user);

  useEffect( () => {
    setIsAuth(user.hasOwnProperty('name'));
  }, [user]);

  if (isAuth) {
    return (
      <div className="account">
        <Header />
        <div className='container'>
          <div className="header__padding">
            <User />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="account">
        <Header />
        <div className="header__padding">
          <Auth />
        </div>
      </div>
    );
  }
}

export default Account;
