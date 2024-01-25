import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import Payment from './src/screens/Payment/Payment';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/routes/HomeStack/HomeStack';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={'#2F74D1'} />
        <HomeStack />
      </View>
    </NavigationContainer>
  );
}

export default App;
