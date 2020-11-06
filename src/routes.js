import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrphaneteMap from "./pages/OrphaneteMap";
import OrphaneteDetails from "./pages/OrphaneteDetails";
import SelectMapPosition from "./pages/CreateOrphanete/SelectMapPosition";
import OrphanateData from "./pages/CreateOrphanete/OrphanateData";
import Header from "./components/Header";

const { Navigator, Screen } = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
        <Screen name="OrphaneteMap" component={OrphaneteMap} />
        <Screen
          name="OrphaneteDetails"
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />,
          }}
          component={OrphaneteDetails}
        />
        <Screen
          name="SelectMapPosition"
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no Mapa" />,
          }}
          component={SelectMapPosition}
        />
        <Screen
          name="OrphanateData"
          options={{
            headerShown: true,
            header: () => <Header title="Informe os Dados" />,
          }}
          component={OrphanateData}
        />
      </Navigator>
    </NavigationContainer>
  );
}
