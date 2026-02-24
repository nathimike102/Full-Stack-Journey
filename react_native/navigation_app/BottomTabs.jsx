import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home.jsx";
import Settings from "./Settings.jsx";

const Tab = createBottomTabNavigator();

const BottomNavigationTabs = () => {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: insets.bottom,
                    left: 0,
                    right: 0,
                    backgroundColor: "#fff",
                    borderTopWidth: 0,
                    elevation: 5,
                },
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
};

export default BottomNavigationTabs;
