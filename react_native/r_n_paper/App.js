import Component from "./Component";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <Component />
      </SafeAreaProvider>
    </>
  )
}

export default App;
