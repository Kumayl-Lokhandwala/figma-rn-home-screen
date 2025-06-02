import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const CopyIcon = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      y={0.841797}
      width={24.1667}
      height={24.1667}
      rx={12.0833}
      fill="#0B2A3E"
    />
    <Path
      d="M16.0773 9.12305H9.86777C8.98724 9.12305 8.27344 9.83685 8.27344 10.7174V16.9269C8.27344 17.8074 8.98724 18.5212 9.86777 18.5212H16.0773C16.9578 18.5212 17.6716 17.8074 17.6716 16.9269V10.7174C17.6716 9.83685 16.9578 9.12305 16.0773 9.12305Z"
      stroke="white"
      strokeWidth={0.983266}
      strokeLinejoin="round"
    />
    <Path
      d="M15.4232 9.12242L15.4372 8.45112C15.436 8.03606 15.2706 7.63834 14.9771 7.34485C14.6836 7.05135 14.2859 6.88595 13.8709 6.88477H7.82919C7.35485 6.88617 6.90034 7.07522 6.56493 7.41063C6.22952 7.74604 6.04046 8.20055 6.03906 8.67489V14.7166C6.04024 15.1316 6.20565 15.5293 6.49914 15.8228C6.79264 16.1163 7.19036 16.2817 7.60542 16.2829H8.27672"
      stroke="white"
      strokeWidth={0.983266}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CopyIcon;
