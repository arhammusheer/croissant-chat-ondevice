import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as ReduxProvider } from "react-redux";
import { useAppSelector } from "./hooks/useAppSelector";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import store from "./redux/store";
import LandingScreen from "./screens/auth/LandingScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ReduxProvider store={store}>
        <SafeAreaProvider>
          <AuthCheckContainer />
          <StatusBar />
        </SafeAreaProvider>
      </ReduxProvider>
    );
  }
}

const AuthCheckContainer = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const colorScheme = useColorScheme();

  if (isLoggedIn) {
    return <Navigation colorScheme={colorScheme} />;
  } else {
    return <LandingScreen colorScheme={colorScheme} />;
  }
};
