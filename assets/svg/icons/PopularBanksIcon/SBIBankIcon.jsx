import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_37_912)">
      <Path
        d="M17 0.00506592C7.61118 0.00506592 0 7.6339 0 17.0443C0 25.8666 6.6895 33.1226 15.2603 33.9949V21.6173C13.4182 20.9146 12.1058 19.1304 12.1058 17.0443C12.1058 14.3449 14.3007 12.1488 17 12.1488C19.6981 12.1488 21.8954 14.3449 21.8954 17.0443C21.8954 19.1304 20.5805 20.9143 18.7384 21.6173V33.9949C27.3105 33.1226 34 25.8666 34 17.0443C34 7.6339 26.3888 0.00506592 17 0.00506592Z"
        fill="#00B5EF"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_37_912">
        <Rect width={34} height={34} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
