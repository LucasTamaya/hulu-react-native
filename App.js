import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
// import CatalogScreen from "./screens/CatalogScreen";
// import SavedFilmsScreen from "./screens/SavedFilmsScreen";
// import SearchScreen from "./screens/SearchScreen";
// import SettingsScreen from "./screens/SettingsScreen";
import LegalMentionsScreen from "./screens/LegalMentionsScreen";
import UserLoggedScreen from "./screens/UserLoggedScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: "Connexion",
                headerBackTitle: "Accueil",
                headerStyle: {
                  backgroundColor: "#151516",
                },
                headerTitleStyle: {
                  color: "#fff",
                },
              }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                title: "Créer mon compte",
                headerStyle: {
                  backgroundColor: "#151516",
                },
                headerTitleStyle: {
                  color: "#fff",
                },
              }}
            />
            <Stack.Screen
              name="UserLogged"
              component={UserLoggedScreen}
              options={{ headerShown: false, headerBackTitle: "Accueil" }}
            />
            <Stack.Screen
              name="Legal"
              component={LegalMentionsScreen}
              options={{
                title: "",
                headerBackTitle: "Paramètres",
                headerStyle: {
                  backgroundColor: "#151516",
                },
                headerTitleStyle: {
                  color: "#fff",
                },
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
        <StatusBar style="light" />
      </NavigationContainer>
    </TailwindProvider>
  );
}
