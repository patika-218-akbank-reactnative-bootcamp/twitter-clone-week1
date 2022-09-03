/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

// JS exports/imports
import DrawerNavigation from '@twitter/navigation/drawerNavigation';
import ThemeProvider from '@twitter/provider/ThemeProvider';
import UserProvider from '@twitter/provider/UserProvider';

import NewTweetProvider from './provider/NewTweetProvider';
import {store} from './store';

/**
 * Re renders:
 * - Parent component yeniden render olursa
 * - Props değiştiğinde
 * - State değiştiğinde
 */

// const useCustomCallback = (func, depArray) => {
//   const myFunc = useMemo(() => func, depArray);
//   return myFunc;
// };

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Provider store={store}>
          <NavigationContainer>
            <UserProvider>
              <NewTweetProvider>
                <DrawerNavigation />
              </NewTweetProvider>
            </UserProvider>
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
