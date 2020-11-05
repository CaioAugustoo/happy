import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrphanatesMap from "./pages/OrphantesMap";

const { Navigator, Screen } = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphanatesMap" component={OrphanatesMap} />
      </Navigator>
    </NavigationContainer>
  );
}
