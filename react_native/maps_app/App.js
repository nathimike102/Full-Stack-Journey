import Component from "./Component";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <>
      <SafeAreaProvider style={{backgroundColor : "#ffffff"}}>
        <Component />
      </SafeAreaProvider>
    </>
  )
}

export default App;
