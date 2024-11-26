import { Groups } from "@screens/Groups/index";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontIsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontIsLoaded ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
