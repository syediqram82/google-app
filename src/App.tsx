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
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <SafeAreaProvider>
          <PaperProvider>
            <ThemeProvider theme={BaseTheme}>
              <BottomSheetProvider>
                <BottomTabNavBar />
              </BottomSheetProvider>
            </ThemeProvider>
          </PaperProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
