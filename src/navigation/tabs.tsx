import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PhotoScreen from '../screens/PhotoScreen';

import { HomeIcon, PhotoIcon } from 'react-native-heroicons/micro';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: true,
  headerShadowVisible: false,
  headerTitle: '',
  headerStyle: {
    backgroundColor: '#f2e9e4',
    borderWidth: 0,
    borderColor: '#f5ebe0',
  },
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 28,
    right: 20,
    left: 20,
    borderRadius: 15,
    height: 90,
    paddingTop: 24,
    borderTopColor: '#fff',
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View className="flex-1 items-center">
              <HomeIcon
                color="#9a8c98"
                size={28}
              />
              <Text className="text-[#9a8c98] text-xs">Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Photos"
        component={PhotoScreen}
        options={{
          tabBarIcon: () => (
            <View className="flex-1 items-center">
              <PhotoIcon
                color="#9a8c98"
                size={28}
              />
              <Text className="text-[#9a8c98] text-xs">Photos</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
