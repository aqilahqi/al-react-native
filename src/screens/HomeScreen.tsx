import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-[#f5ebe0]">
      <StatusBar style="dark" />
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
