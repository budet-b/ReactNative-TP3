import { Text, TouchableOpacity, View } from 'react-native';

export default function Login() {
  // FIXME

  const handleLogin = () => {
    // FIXME
  };

  return (
    <View>
      <TouchableOpacity onPress={handleLogin} style={{ width: 100 }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
