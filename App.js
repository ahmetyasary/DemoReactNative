import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import CurrenciesScreen from './src/screens/CurrenciesScreen';
import HomeScreen from './src/screens/HomeScreen';
import CurrenciesDetailScreen from './src/screens/CurrenciesDetailScreen';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Anasayfa" component={HomeScreen} />
        <Stack.Screen name="Portföyüm" component={CurrenciesScreen} />
        <Stack.Screen name="Döviz Detayı" component={CurrenciesDetailScreen} />
        <Stack.Screen name="Sayaç" component={CounterScreen} />
        <Stack.Screen name="Kutu" component={BoxScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


