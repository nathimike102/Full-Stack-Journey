import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    
    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <Text style={styles.text}>Settings Screen</Text>
            <Button
                mode="contained"
                buttonColor="cyan"
                onPress={() => {
                    navigation.navigate("Profile");
                }}
            >
                <Text>Profile Screen</Text>
            </Button>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 20, 

    },
});
