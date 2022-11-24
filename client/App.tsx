import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SocketProvider } from './src/Contexts/SocketContext';
import { UsersProvider } from './src/Contexts/UserContext';
import { MainProvider } from './src/Contexts/MainContext';

import Chat from './src/Chat';
import Login from './src/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SocketProvider>
        <UsersProvider>
          <MainProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Chat" component={Chat} />
              </Stack.Navigator>
            </NavigationContainer>
          </MainProvider>
        </UsersProvider>
      </SocketProvider>
    </SafeAreaView>
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
