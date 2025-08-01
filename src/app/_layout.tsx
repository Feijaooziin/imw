import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Feather } from "@expo/vector-icons";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "transparent",
          drawerInactiveBackgroundColor: "transparent",
          drawerInactiveTintColor: "#777",
          drawerActiveTintColor: "#FFF",
          overlayColor: "transparent",
          drawerStyle: {
            backgroundColor: "#292929",
            paddingTop: 32,
            width: "50%",
          },
          drawerLabelStyle: {
            marginLeft: 8,
          },

          sceneStyle: {
            backgroundColor: "#292929",
          },
        }}
      >
        <Drawer.Screen
          name="login"
          options={{
            drawerItemStyle: { display: "none" },
            swipeEnabled: false, // impede gesto para abrir
          }}
        />

        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Inicio",
            drawerIcon: ({ color }) => (
              <Feather name="home" size={20} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="bible"
          options={{
            drawerLabel: "Bíblia",
            drawerIcon: ({ color }) => (
              <Feather name="book-open" size={20} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "Sobre",
            drawerIcon: ({ color }) => (
              <Feather name="info" size={20} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
