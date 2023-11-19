import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitialScreen from './screens/InitialScreen';
import ValorNumericoScreen from './screens/ValorNumericoScreen';
import CorScreen from './screens/CorScreen';
import CorResultadoScreen from './screens/CorResultadoScreen';
import ValorResultadoScreen from './screens/ValorResultadoScreen';

const Tab = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator initialRouteName='InitialScreen'>
        <Tab.Screen name='InitialScreen' component={InitialScreen} options={{headerTitle: ''}}/>
        <Tab.Screen name='ValorNumericoScreen' component={ValorNumericoScreen} options={{headerTitle: ''}}/>
        <Tab.Screen name='CorScreen' component={CorScreen} options={{headerTitle: ''}}/>
        <Tab.Screen name='CorResultadoScreen' component={CorResultadoScreen} options={{headerTitle: ''}}/>
        <Tab.Screen name='ValorResultadoScreen' component={ValorResultadoScreen} options={{headerTitle: ''}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}