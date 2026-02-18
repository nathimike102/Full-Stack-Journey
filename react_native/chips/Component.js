import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, TextInput, HelperText, Chip } from "react-native-paper";

const Component = () => {
    const insets = useSafeAreaInsets();
    const [text, setText] = useState("");
    const [MyData, setMyData] = useState([]);
    const [error, setError] = useState(true);
    const [state, setState] = useState(false);

    const AddLanguage = (data) => {
        setState(true);
        setTimeout(() => {
            setMyData([...MyData, data]);
            setText("");
            setState(false);
        }, 200);
    };

    const Delete = (item) => {
        const newData = MyData.filter((data) => data !== item);
        setMyData(newData);
        alert(`${item} Deleted`);
    };

    const SubmitData = () => {
        alert(`Submitted Data: ${MyData.join(", ")}`);
        setMyData([]);
    };
    
    const ClearData = () => {
        setMyData([]);
        alert("Data Cleared");
    };

    useEffect(() => {
        if (text.trim() === "" || MyData.length >= 5) {
            setError(true);
        } else {
            setError(false);
        }
    }, [text, MyData]);

    return (
        <>
            <View style={[Mystyles.MystatusBar, { paddingTop: insets.top }]} />
            <View style={Mystyles.container}>
                <View style={Mystyles.logo}>
                    <Text style={{fontSize:20, color: 'rgba(20, 18, 169, 0.78)'}}>Programming Languages</Text> 
                </View>
                < View style={Mystyles.languages} >
                    <FlatList
                        data={MyData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                            <Chip 
                                style={Mystyles.chip}
                                onClose={() => Delete(item)}
                            >
                                {item}
                            </Chip>
                        )}
                    />
                </View>
                <View style={{alignItems: "center", marginTop: 20}}>
                    {MyData.length === 0 && (
                        <Text style={{color: "rgba(20, 18, 169, 0.78)", fontSize: 16}}>No Data Found</Text>
                    )}
                </View>
                <TextInput 
                    label="Enter Your Programming Language"
                    placeholder="C++"
                    value={text}
                    disabled={state || MyData.length >= 5}
                    mode="outlined"
                    style={Mystyles.input} 
                    onChangeText={(data) => setText(data)}
                />
                <HelperText type="error" visible={error} style={{alignSelf: "flex-start", paddingLeft: 40}}>
                    {MyData.length < 5 ? "Please Add Programming Language" : "Only a maximum of 5 langauges"}
                </HelperText>
                <Button 
                    mode="contained"
                    buttonColor="rgb(18, 198, 207)"
                    style={Mystyles.add}
                    loading={state} 
                    icon={"plus"} 
                    disabled={error} 
                    onPress={() => AddLanguage(text)}
                >
                    Add Language
                </Button>
                <View style={Mystyles.buttons}>
                    <Button
                        mode="outlined"
                        buttonColor="rgb(18, 207, 53)"
                        textColor="#FFF"
                        disabled={MyData.length === 0}
                        style={Mystyles.add}
                        onPress={() => SubmitData()}
                    >
                        Submit
                    </Button>
                    <Button
                        mode="outlined"
                        buttonColor="rgb(207, 18, 18)"
                        textColor="#FFF"
                        disabled={MyData.length === 0}
                        style={Mystyles.add}
                        onPress={() => ClearData()}
                    >
                        Clear
                    </Button>
                </View>
            </View>
        </>
    );
};

export default Component;

const Mystyles = StyleSheet.create({
    MystatusBar: {
        backgroundColor: "#ffffff",
    },
    logo: {
        backgroundColor: "#ffffff",
        padding: 50,
        alignItems: "center",
    },
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    languages : {
        width: "100%",
        paddingHorizontal: 10,
        position: "relative",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    chip: {
        margin: 5,
        width: "45%",
        paddingHorizontal: 10,
    },
    input: {
        width: "80%",
        marginTop: 20,
    },
    add: {
        marginTop: 20,
        width: "50%",
        padding: 5,
    },
    buttons: {
        flexDirection: "row",
        gap: 20,
        justifyContent: "center",
        marginTop: 20,
        width: "60%",
    },
});