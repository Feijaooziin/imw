import { StyleSheet } from "react-native";
import { DrawerSceneWrapper } from "@/components/drawer-Scene-wrapper";
import { Header } from "@/components/Header";

import { drizzle } from "drizzle-orm/neon-http";
const db = drizzle(process.env.DATABASE_URL);

export default function Index() {
  return (
    <DrawerSceneWrapper>
      <Header name="Início" />
    </DrawerSceneWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
