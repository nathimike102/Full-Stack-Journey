import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Component = () =>{
    const insets = useSafeAreaInsets();
    console.log(insets)
    return(
        <>
            {/* <StatusBar barStyle="light-content" hidden /> */}
            <View style={[Mystyles.MystatusBar, { paddingTop: insets.top }]} />
            <View style={Mystyles.container}>
                <Text>Stylings App Component</Text>
            </View>
        </>
    )
}

export default Component;

const Mystyles = StyleSheet.create({
    MystatusBar:{
        backgroundColor:"#21b2cf",
    },
    container:{
        flex:1,
        backgroundColor:"#f5f6fa",
        justifyContent:"center",
        alignItems:"center",
    }
})