import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>First App</Text>
      <Text style={styles.button} onPress={() => alert('Button Pressed!')}>Press Me</Text>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
