import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Text, Button, Pressable } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PhotoScreen from '../screens/PhotoScreen';
import SinglePhotoScreen from '../screens/SinglePhotoScreen';

import {
  HomeIcon,
  PhotoIcon,
  ChevronLeftIcon,
} from 'react-native-heroicons/micro';
import { useNavigation } from '@react-navigation/native';

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
  tabBarActiveTintColor: '#22223b',
  tabBarInactiveTintColor: '#9a8c98',
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
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View className="flex-1 items-center">
              <HomeIcon
                color={color}
                size={28}
              />
              <Text className={`text-[${color}] text-xs`}>Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Photos"
        component={PhotoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View className="flex-1 items-center">
              <PhotoIcon
                color={color}
                size={28}
              />
              <Text className={`text-[${color}] text-xs`}>Photos</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="SinglePhoto"
        component={SinglePhotoScreen}
        options={{
          headerShadowVisible: true,
          headerShown: true,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Photos')}
              className="pl-4"
            >
              <ChevronLeftIcon
                color="#22223b"
                size={28}
              />
            </Pressable>
          ),
          tabBarItemStyle: {
            display: 'none',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
