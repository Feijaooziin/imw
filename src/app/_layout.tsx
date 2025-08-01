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
          drawerHideStatusBarOnOpen: true,
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
          name="index"
          options={{
            drawerLabel: "Inicio",
            drawerIcon: ({ color }) => (
              <Feather name="home" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="products"
          options={{
            drawerLabel: "Produtos",
            drawerIcon: ({ color }) => (
              <Feather name="bell" size={20} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
