import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Text } from "react-native-paper";

const Home = () => {
    const insets = useSafeAreaInsets();

    return (
        <>
            <View style={[Mystyles.MystatusBar, { paddingTop: insets.top }]} />
            <Text style={Mystyles.header}>Welcome to the Home Paget</Text>
        </>
    );
};

export default Home;

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