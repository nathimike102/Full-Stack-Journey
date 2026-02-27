import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Drawer from "./DrawerTabs.jsx"

export default function App() {

  return (
    <SafeAreaProvider>
      <Drawer />
    </SafeAreaProvider>
  );
}
