import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";

import mapMarker from "../images/marker.png";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function OrphaneteMap() {
  const navigation = useNavigation();

  function handleNavigateToOrphaneteDetails() {
    navigation.navigate("OrphaneteDetails");
  }

  function handleNavigateToCreateOrphanete() {
    navigation.navigate("SelectMapPosition");
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -16.7354414,
          longitude: -49.3420544,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          icon={mapMarker}
          coordinate={{
            latitude: -16.7354414,
            longitude: -49.3420544,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphaneteDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das Meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfantos encontrados</Text>

        <TouchableOpacity
          style={styles.createOrphaneteButton}
          onPress={handleNavigateToCreateOrphanete}
        >
          <Feather name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 16,
    justifyContent: "center",
  },
  calloutText: {
    color: "#0089a5",
    fontSize: 14,
    fontFamily: "Nunito_700Bold",
  },
  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: "#fff",
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    color: "#8fa7b3",
    fontFamily: "Nunito_700Bold",
  },
  createOrphaneteButton: {
    width: 56,
    height: 56,
    backgroundColor: "#15c3d6",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
});
