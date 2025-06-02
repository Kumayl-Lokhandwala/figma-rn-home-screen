import { Text, View } from "react-native";

const MyAppText = ({ children, style = {} }) => {
  // Extract fontWeight and color from style
  const { fontWeight, color = "white", ...restStyle } = style;

  // Choose font family based on fontWeight
  let fontFamily = "Poppins-Regular";
  if (fontWeight === "bold" || fontWeight === "700") {
    fontFamily = "Poppins-Bold";
  }

  return (
    <View>
      <Text style={{ fontFamily, color, ...restStyle }}>
        {children}
      </Text>
    </View>
  );
};

export default MyAppText;
