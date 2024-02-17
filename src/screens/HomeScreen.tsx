import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-[#f2e9e4] pb-[90px]">
      <StatusBar style="dark" />
      <Text className="font-semibold text-lg mb-10">Welcome 👋🏻</Text>
      <Text className="font-bold text-4xl mb-4">Photo Gallery</Text>
      <Text className="text-[#9a8c98]">Browse random photos</Text>
    </View>
  );
}

export default HomeScreen;
