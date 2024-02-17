import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-[#f5ebe0]">
      <StatusBar style="dark" />
      <Text className="font-semibold text-lg mb-2">Welcome 👋🏻</Text>
      <Text className="font-bold text-4xl mb-10">Photo Gallery</Text>
      <Text>Browse photos to kill the time</Text>
    </View>
  );
}

export default HomeScreen;
