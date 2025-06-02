import * as React from "react";
import Svg, { Path, Text as SvgText } from "react-native-svg";

const UserIcon = ({ text = "", ...props }) => (
  <Svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M28 1.89258C42.4188 1.89258 54.1082 13.5812 54.1084 28C54.1084 42.419 42.419 54.1084 28 54.1084C13.5812 54.1082 1.89258 42.4188 1.89258 28C1.89281 13.5814 13.5814 1.89281 28 1.89258Z"
      fill="#0C2B3E"
      stroke="#D7D7D7"
      strokeWidth={3}
    />

    {/* Centered text */}
    <SvgText
      x="50%"
      y="50%"
      textAnchor="middle"
      alignmentBaseline="middle"
      fontSize="24"
      fill="#FFFFFF"
      fontFamily="Poppins-Regular"
    >
      {text}
    </SvgText>
  </Svg>
);

export default UserIcon;
