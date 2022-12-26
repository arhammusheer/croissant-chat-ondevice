import { useState } from "react";
import { ColorSchemeName, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "../../components/Logo";
import { Text, View } from "../../components/Themed";
import { colors } from "../../constants/Colors";

export default function LandingScreen({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        rootStyles.container,
        {
          paddingTop: 20 + insets.top,
        },
      ]}
    >
      <View />
      <Logo size={150} />
      <LoginButtons />
    </View>
  );
}

const LoginButtons = () => {
  const options = {
    google: {
      textColor: colors.black,
      backgroundColor: colors.brand,
      press_color: colors.orange[400],
      name: "Continue with Google",
      onClick: () => {},
    },
    email: {
      textColor: colors.brand,
      backgroundColor: colors.black,
      press_color: colors.black,
      name: "Continue with Email",
      onClick: () => {},
    },
  };

  return (
    <View style={loginStyles.container}>
      {Object.values(options).map((option) => {
        return (
          <Pressable
						key={option.name}
            style={({ pressed }) => [
              loginStyles.button,
              {
                backgroundColor: pressed
                  ? option.press_color
                  : option.backgroundColor,
              },
            ]}
            onPress={option.onClick}
          >
            <Text
              style={[
                loginStyles.button_text,
                {
                  color: option.textColor,
                },
              ]}
            >
              {option.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const rootStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.black,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "unbounded",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

const loginStyles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    // backgroundColor: colors.orange[300],
    padding: 20,
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20,
    padding: 20,
    margin: 5,
    width: "100%",
  },
  button_text: {
    fontWeight: "bold",
    fontFamily: "unbounded",
    fontSize: 18,
  },
});
