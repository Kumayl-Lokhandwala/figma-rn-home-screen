import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HomeIcon = (props) => (
  <Svg
    width={18}
    height={19}
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17 16.0974V9.91348C17 9.48325 16.9112 9.05754 16.7388 8.66242C16.5664 8.26731 16.3142 7.91111 15.9976 7.61565L10.0992 2.10971C9.80213 1.8323 9.40882 1.67773 9 1.67773C8.59118 1.67773 8.19787 1.8323 7.9008 2.10971L2.0024 7.61565C1.68578 7.91111 1.43356 8.26731 1.2612 8.66242C1.08883 9.05754 0.999954 9.48325 1 9.91348V16.0974C1 16.5165 1.16857 16.9185 1.46863 17.2149C1.76869 17.5112 2.17565 17.6777 2.6 17.6777H15.4C15.8243 17.6777 16.2313 17.5112 16.5314 17.2149C16.8314 16.9185 17 16.5165 17 16.0974Z"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HomeIcon;
