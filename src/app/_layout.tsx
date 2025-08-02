import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}

function MainLayout() {
  const { setAuth } = useAuth();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth(session.user);
        router.replace("/(panel)/homepage/page");
        return;
      }
      setAuth(null);
      router.replace("/(auth)/signin/page");
    });
  }, []);
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
          name="index"
          options={{
            drawerItemStyle: { display: "none" },
            swipeEnabled: false, // impede gesto para abrir
          }}
        />

        <Drawer.Screen
          name="(auth)/signin/page"
          options={{
            drawerItemStyle: { display: "none" },
            swipeEnabled: false, // impede gesto para abrir
          }}
        />

        <Drawer.Screen
          name="(auth)/signup/page"
          options={{
            drawerItemStyle: { display: "none" },
            swipeEnabled: false, // impede gesto para abrir
          }}
        />

        <Drawer.Screen
          name="(panel)/homepage/page"
          options={{
            drawerLabel: "Inicio",
            drawerIcon: ({ color }) => (
              <Ionicons name="home" size={20} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="(panel)/bible/page"
          options={{
            drawerLabel: "Bíblia",
            drawerIcon: ({ color }) => (
              <Ionicons name="book" size={20} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="(panel)/about/page"
          options={{
            drawerLabel: "Sobre",
            drawerIcon: ({ color }) => (
              <Ionicons
                name="information-circle-sharp"
                size={20}
                color={color}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
