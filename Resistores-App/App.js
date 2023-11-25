import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitialScreen from './screens/InitialScreen';
import ValorNumericoScreen from './screens/ValorNumericoScreen';
import CorScreen from './screens/CorScreen';
import ResultadoScreen from './screens/ResultadoScreen';
import AjudaScreen from './screens/AjudaScreen';

const Tab = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator initialRouteName='InitialScreen'>
        <Tab.Screen name='InitialScreen' component={InitialScreen} options={{headerTitle: ''}}/>
        <Tab.Screen name='ValorNumericoScreen' component={ValorNumericoScreen} options={{headerTitle: ''}}/>
        <Tab.Screen name='CorScreen' component={CorScreen} options={{headerTitle: ''}}/>
        <Tab.Screen name='ResultadoScreen' component={ResultadoScreen} options={{headerTitle: ''}}/>
        <Tab.Screen name='AjudaScreen' component={AjudaScreen} options={{headerTitle: ''}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}