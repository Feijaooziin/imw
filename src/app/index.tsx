import { DrawerToggleButton } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View } from "react-native";
import { DrawerSceneWrapper } from "../components/drawer-Scene-wrapper";

export default function Index() {
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.img}
            source={{ uri: "https://github.com/feijaostudios.png" }}
          />
          <View style={styles.user}>
            <Text style={styles.hi}>Lojinha do</Text>
            <Text style={styles.username}>Feijão</Text>
          </View>

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
  img: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  user: {
    flex: 1,
    justifyContent: "center",
  },
  hi: {
    fontSize: 14,
  },
  username: {
    fontSize: 16,
    fontWeight: "700",
  },
});
