/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {ThemeProvider} from 'styled-components/native';
import BaseTheme from 'theme/BaseTheme';
import {PaperProvider} from 'react-native-paper';
import {BottomTabNavBar} from './navigation/components/BottomTabNavbar';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetProvider} from './context/BottomSheetContext';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <PaperProvider>
          <ThemeProvider theme={BaseTheme}>
            <BottomSheetProvider>
              <BottomTabNavBar />
            </BottomSheetProvider>
          </ThemeProvider>
        </PaperProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
