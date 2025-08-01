import { DrawerToggleButton } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View } from "react-native";
import { DrawerSceneWrapper } from "../components/drawer-Scene-wrapper";

export default function Products() {
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Produtos</Text>

          <DrawerToggleButton />
        </View>
      </View>
    </DrawerSceneWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
  },
});
