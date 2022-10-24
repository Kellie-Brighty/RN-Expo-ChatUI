import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { theme } from './src/Theme';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import HomeNavigator from './src/components/HomeNavigator';
import Header from './src/components/Header';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

export default function App() {
  const Stack = createStackNavigator();
  const [fontsLoaded] = useFonts({
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.otf'),
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.otf'),
  });

  return (
    <NavigationContainer>
      {!fontsLoaded ? (<></>) : (
      <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name='SignupScreen' component={SignupScreen} options={{headerShown: false}} />
        <Stack.Screen name='HomeScreen' component={HomeNavigator} options={{headerShown: true, header: () => <Header title="Chat"  />}} />
      </Stack.Navigator>
      </SafeAreaProvider>)}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
