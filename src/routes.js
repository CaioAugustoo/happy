import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrphaneteMap from "./pages/OrphaneteMap";

const { Navigator, Screen } = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphaneteMap" component={OrphaneteMap} />
      </Navigator>
    </NavigationContainer>
  );
}
