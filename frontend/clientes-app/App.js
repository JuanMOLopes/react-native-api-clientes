import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TelaInicial from "./screens/TelaInicial";
import TelaRead from "./screens/TelaRead";
import TelaCreate from "./screens/TelaCreate";
import TelaUpdate from "./screens/TelaUpdate";
import TelaDelete from "./screens/TelaDelete";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="TelaInicial" component={TelaInicial} />
        <Drawer.Screen name="TelaRead" component={TelaRead} />
        <Drawer.Screen name="TelaCreate" component={TelaCreate} />
        <Drawer.Screen name="TelaUpdate" component={TelaUpdate} />
        <Drawer.Screen name="TelaDelete" component={TelaDelete} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
