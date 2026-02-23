import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <SafeAreaProvider style={{ backgroundColor: "#ffffff" }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Contact" component={Contact} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
