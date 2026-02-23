import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation,useRoute } from "@react-navigation/native";
import { Button, Text } from "react-native-paper";

const Contact = () => {
    const insets = useSafeAreaInsets();
    const Navigation = useNavigation()
    // const routesData = useRoute();

    return (
        <>
            <View style={[Mystyles.MystatusBar, { paddingTop: insets.top }]} />
            <Text style={Mystyles.header}>Welcome to the Contact Page</Text>
            <Button
                onPress={()=>Navigation.navigate('Home')}
            >Move to Home Screen</Button>
        </>
    );
};

export default Contact;

const Mystyles = StyleSheet.create({
    MystatusBar: {
        backgroundColor: "#ffffff",
    },
    header: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
});