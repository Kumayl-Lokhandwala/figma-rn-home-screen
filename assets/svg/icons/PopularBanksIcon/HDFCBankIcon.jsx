import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const HDFCBankIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_37_913)">
      <Path d="M0 0H30V30H0V0Z" fill="#ED232A" />
      <Path
        d="M5.25073 5.25081H24.7529V24.7529H5.25073V5.25081Z"
        fill="white"
      />
      <Path d="M13.5004 0H16.4992V30H13.5004V0Z" fill="white" />
      <Path d="M0 13.5042H30V16.503H0V13.5042Z" fill="white" />
      <Path
        d="M10.5015 10.5017H19.5018V19.5021H10.5015V10.5017Z"
        fill="#004C8F"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_37_913">
        <Rect width={30} height={30} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HDFCBankIcon;
