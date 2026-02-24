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
                screenOptions={({route})=>({
                  tabBarIcon:({focused,color})=>{
                    let IconName;
                    if(route.name == 'Home'){
                       IconName = focused ? 'home' : "home-outline"
                    }
                    if(route.name == "Settings"){
                      IconName = focused ? "cog" : "cog-outline"
                    }
                    return <Icon source={IconName} size={30} color={color}/>
                  },
                  tabBarActiveTintColor:"green",
                  tabBarInactiveTintColor:"black",
                //   headerShown:false,
                //   headerStyle:{
                //   }
                })}
              >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
};

export default BottomNavigationTabs;
