import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PhotoScreen from '../screens/PhotoScreen';

import { HomeIcon, PhotoIcon } from 'react-native-heroicons/micro';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 28,
    right: 20,
    left: 20,
    borderRadius: 15,
    height: 90,
    padding: 0,
    alignSelf: 'center',
    flexDirection: 'row',
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
            <View className="text-center">
              <HomeIcon
                color="#4a4e69"
                size={28}
              />
              <Text>Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Photos"
        component={PhotoScreen}
        options={{
          tabBarIcon: () => (
            <PhotoIcon
              color="#4a4e69"
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
