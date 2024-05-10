
import React from 'react';

import {
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Dashboard from './src/Dashboard/dashboard';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
        <View style={{flex:1}}>
          <StatusBar barStyle={'dark-content'} />
     <Dashboard/>
        </View>
        </SafeAreaProvider>
  );
}



export default App;
