import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, TextInput, HelperText } from "react-native-paper";

const Component = () => {
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState(false);
    const [error, setError] = useState(true);
    
    useEffect(() => {
        if (email.length > 0 && password.length > 0 && email.includes("@") && password.length >= 6) {
            setError(false);
        } else {
            setError(true);
        }
    }, [email, password]);

    const Login = () => {
        setState(true);
        setTimeout(() => {
            setState(false);
            setEmail("");
            setPassword("");
            alert("Login Successfull");
        }, 2000);
    }

    return (
        <>
            <View style={[Mystyles.MystatusBar, { paddingTop: insets.top }]} />
            <View style={Mystyles.container}>
                <View style={Mystyles.logo}>
                    <Text style={{fontSize: 60, paddingTop:60, color: 'rgba(5, 11, 91, 0.78)'}}>Welcome</Text>
                    <Text style={{fontSize:20, margin:10, color: 'rgba(5, 11, 91, 0.78)'}}>to</Text>
                    <Text style={{fontSize:30, color: 'rgba(20, 18, 169, 0.78)'}}>CoderCanvas</Text> 
                </View>
                <TextInput 
                    label="Email" 
                    value={email} 
                    placeholder="example@gmail.com" 
                    mode="outlined" 
                    style={Mystyles.input} 
                    onChangeText={(data) => setEmail(data)}
                />
                <HelperText type="error" visible={error} style={{alignSelf: "flex-start", paddingLeft: 40}}>
                    {!email.includes('@') ? "Valid Email is required" : ""}
                </HelperText>
                <TextInput 
                    label="Password" 
                    value={password}
                    placeholder="******" 
                    mode="outlined" 
                    secureTextEntry 
                    style={Mystyles.input} 
                    onChangeText={(data) => setPassword(data)} 
                />
                <HelperText type="error" visible={error} style={{alignSelf: "flex-start", paddingLeft: 40}}>
                    {password.length < 6 ? "Password must be at least 6 characters long" : ""}
                </HelperText>
                <Button 
                    mode="contained"
                    buttonColor="rgb(18, 198, 207)"
                    style={Mystyles.login}
                    loading={state} 
                    icon={"login"} 
                    disabled={state || error} 
                    onPress={() => Login()}
                >
                    Login
                </Button>
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
    input: {
        width: "80%",
        marginTop: 20,
    },
    login: {
        marginTop: 20,
        width: "50%",
        padding: 5,
    },
});