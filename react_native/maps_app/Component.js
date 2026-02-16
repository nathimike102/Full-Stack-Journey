import React from "react";
import { View, StyleSheet, FlatList, Text, Image, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import img1 from "./assets/person1.jpeg";
import img2 from "./assets/person2.jpeg";
import img3 from "./assets/person3.jpeg";
import img4 from "./assets/person4.jpeg";
import img5 from "./assets/person5.jpeg";

const Component = () => {
    const insets = useSafeAreaInsets();
    const MyData = [
        { id: 1, img: img1, name: "Mike", msg: "Hey, its been a while", time : "2:30 PM" },
        { id: 2, img: img2, name: "John", msg: "Thomas, did you see my keys", time : "3:45 PM" },
        { id: 3, img: img3, name: "Sara", msg: "I am waiting for you at the cafe", time : "4:15 PM" },
        { id: 4, img: img4, name: "Lily", msg: "You are running late, where are you?", time : "5:20 PM" },
        { id: 5, img: img5, name: "David", msg: "Thomas?", time : "6:00 PM" },
        { id: 6, img: img1, name: "Mike", msg: "Hey, its been a while", time : "7:30 PM" },
        { id: 7, img: img2, name: "John", msg: "Thomas, did you see my keys", time : "8:15 PM" },
        { id: 8, img: img3, name: "Sara", msg: "I am waiting for you at the cafe", time : "9:00 PM" },
        { id: 9, img: img4, name: "Lily", msg: "You are running late, where are you?", time : "10:30 PM" },
        { id: 10, img: img5, name: "David", msg: "Thomas?", time : "11:00 PM" },
        { id: 11, img: img1, name: "Mike", msg: "Hey, its been a while", time : "2:30 PM" },
        { id: 12, img: img2, name: "John", msg: "Thomas, did you see my keys", time : "3:45 PM" },
        { id: 13, img: img3, name: "Sara", msg: "I am waiting for you at the cafe", time : "4:15 PM" },
        { id: 14, img: img4, name: "Lily", msg: "You are running late, where are you?", time : "5:20 PM" },
        { id: 15, img: img5, name: "David", msg: "Thomas?", time : "6:00 PM" },
        { id: 16, img: img1, name: "Mike", msg: "Hey, its been a while", time : "7:30 PM" },
        { id: 17, img: img2, name: "John", msg: "Thomas, did you see my keys", time : "8:15 PM" },
        { id: 18, img: img3, name: "Sara", msg: "I am waiting for you at the cafe", time : "9:00 PM" },
        { id: 19, img: img4, name: "Lily", msg: "You are running late, where are you?", time : "10:30 PM" },
        { id: 20, img: img5, name: "David", msg: "Thomas?", time : "11:00 PM" },
    ];
    
    return (
        <>
            <View style={[Mystyles.MystatusBar, { paddingTop: insets.top }]} />
            <View style={Mystyles.header}>
                <Button title="Edit" style={Mystyles.edit} onPress={() => {}}/>
                <Text style={Mystyles.message}>Messages</Text>
                <Button title="New" style={Mystyles.new} onPress={() => {}}/>
            </View>
            <FlatList
                data={MyData}
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ item }) => (
                    <View style={Mystyles.parent_view}>
                        <View style={Mystyles.image}>
                            <Image source={item.img} style={Mystyles.imgs}/>
                        </View>
                        <View style={Mystyles.info}>
                            <Text style={Mystyles.name}>{item.name}</Text>
                            <Text style={Mystyles.msg}>{item.msg}</Text>
                        </View>
                        <Text style={Mystyles.time}>{item.time}</Text>
                    </View>
                )}
            />
        </>
    );
};

export default Component;

const Mystyles = StyleSheet.create({
    MystatusBar: {
        backgroundColor: "#ffffff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
    },
    edit: {
        fontSize: 15,
        fontWeight: "bold",
        padding: 10,
        borderRadius: 20,
        backfaceVisibility: "visible",
        backgroundColor: "#8763",
        color: "#000"
    },
    message: {
        fontSize: 25,
        fontWeight: "bold",
        padding: 10,
    },
    new: {
        fontSize: 15,
        fontWeight: "bold",
        padding: 10,
        borderRadius: 20,
    },
    parent_view: {
        margin: 1,
        backgroundColor: "#f5f6fa",
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
      width: 80,
      height: 80
    },
    imgs: {
      width: "100%",
      height: "100%",
      borderRadius: 50
    },
    info: {
      paddingLeft: 15,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
    msg: {
        fontSize: 15,
        color: "#777",
    },
    time: {
        position: "absolute",
        right: 10,
        top: 10,
        fontSize: 12,
        color: "#777",
    }
});