import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {UserContext} from '../context/user';
import {useNavigation} from '@react-navigation/native';

const UserProvider = ({children}) => {
  const [userState, setUserState] = useState(null);
  const {navigate} = useNavigation();

  return (
    <UserContext.Provider
      value={{
        user: userState,
        setUser: setUserState,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
