import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Home from "./Home";
import Settings from "./Settings";

const Draw = createDrawerNavigator();

const Drawer = () => {
    const insets = useSafeAreaInsets();
    return (
        <NavigationContainer>
            <Draw.Navigator
                screenOptions={{
                    drawerActiveTintColor: "#fff",
                    drawerActiveBackgroundColor: "#000",
                    drawerInactiveTintColor: "#000",
                    drawerInactiveBackgroundColor: "#fff",
                    drawerStyle: {
                        backgroundColor: "#fff",
                    },
                    drawerLabelStyle: {
                        fontSize: 16,
                        fontWeight: "bold",
                    },
                    drawerItemStyle: {
                        marginVertical: 5,
                    },
                    drawerContentStyle: {
                        paddingTop: insets.top,
                    },
                    drawerPosition: "right",
                }}
            >
                <Draw.Screen name="Home" component={Home} />
                <Draw.Screen name="Settings" component={Settings} />
            </Draw.Navigator>
        </NavigationContainer>
    );
};

export default Drawer;