import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import PhotoScreen from "../screens/PhotoScreen";

const Tab = createBottomTabNavigator()

const screenOptions = {
  headerShown: false
}


const Tabs = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Photos" component={PhotoScreen} />
        </Tab.Navigator>
    )
}

export default Tabs