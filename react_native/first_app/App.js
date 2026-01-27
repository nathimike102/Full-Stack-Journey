import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Login = () => {
    if(username === '' || password === '') {
      alert("Please enter both username and password.");
      return;
    }
    alert("Details Submitted!\nUsername: " + username + "\nPassword: " + password);
    setPassword('');
    setUsername('');
  };

  return (
    <>
    <View style={styles.container}>
      <Text style={[styles.title, {fontSize: 30}]}>Welcome</Text>
      <Text style={styles.title}>First React Native App!</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Username:</Text> 
        <TextInput style={styles.input} onChangeText={text => setUsername(text)} value={username} />
        <Text style={styles.label}>Password:</Text>
        <TextInput style={styles.input} secureTextEntry={true} onChangeText={text => setPassword(text)} value={password} />
      </View>
      <Text style={styles.button} onPress={Login}>Login</Text>
      <StatusBar style="auto" />
    </View>
    <View>
      <Text style={styles.footer}>nathi_mike</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: '#fff',
  },
  label: {
    marginTop: 15,
    fontSize: 16,
  },
  footer: {
    textAlign: 'center',
    padding : 10,
    backgroundColor: '#00ffff',
  },
});
