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

// JS exports/imports
import DrawerNavigation from '@twitter/navigation/drawerNavigation';
import ThemeProvider from '@twitter/provider/ThemeProvider';
import UserProvider from '@twitter/provider/UserProvider';

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
        <NavigationContainer>
          <UserProvider>
            <DrawerNavigation />
          </UserProvider>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
