import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import NavigationRoutes from './routes/routes';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
        <NavigationRoutes />
    </SafeAreaView>
  );
}

export default App;
