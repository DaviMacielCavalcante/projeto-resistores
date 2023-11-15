import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitialScreen from './screens/InitialScreen';
import ValorNumericoScreen from './screens/ValorNumericoScreen';
import CorScreen from './screens/CorScreen';

const Tab = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator initialRouteName='InitialScreen'>
        <Tab.Screen name='InitialScreen' component={InitialScreen} options={{headerTitle: ''}}/>
        <Tab.Screen name='ValorNumericoScreen' component={ValorNumericoScreen} options={{headerTitle: ''}}/>
        <Tab.Screen name='CorScreen' component={CorScreen} options={{headerTitle: ''}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
