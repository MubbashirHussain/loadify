import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import MainNavigation from './src/config/navigation';
import theme, { ThemeProvider } from './src/config/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store';



function App() {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={theme.colors.primary[500]}
        />
        <Provider store={store}>
          <PersistGate loading={<View />} persistor={persistor}>
            <MainNavigation />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
