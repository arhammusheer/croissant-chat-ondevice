import { Image } from "react-native";

export default function Logo({ size = 100 }: { size?: number }) {
  return (
    <Image
      source={require("../assets/images/croissant.png")}
      style={{ width: size, height: size }}
    />
  );
}
