import Component from "./Component";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";

const App = () => {
  return (
    <>
      <PaperProvider>
        <SafeAreaProvider style={{backgroundColor: "#ffffff"}}>
          <Component />
        </SafeAreaProvider>
      </PaperProvider>
    </>
  )
}

export default App;
