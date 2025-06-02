import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const BankTransferIcon = (props) => (
  <Svg
    width={116}
    height={116}
    viewBox="0 0 116 116"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_16_256)">
      <Circle cx={58} cy={58} r={28} fill="#0B2A3E" />
    </G>
    <Path
      d="M68.7771 64.6211H47.1984C46.4761 64.6211 45.8906 65.2066 45.8906 65.9289V67.2367C45.8906 67.959 46.4761 68.5445 47.1984 68.5445H68.7771C69.4994 68.5445 70.0849 67.959 70.0849 67.2367V65.9289C70.0849 65.2066 69.4994 64.6211 68.7771 64.6211Z"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M49.1601 53.4936V64.6229M66.8154 53.4936V64.6229M61.2573 53.4936V64.6229M54.7183 53.4936V64.6229M56.7323 44.6999L46.5707 50.2581C46.3649 50.3707 46.1932 50.5366 46.0735 50.7384C45.9539 50.9401 45.8907 51.1704 45.8906 51.405V52.7089C45.8906 52.917 45.9733 53.1166 46.1205 53.2637C46.2676 53.4109 46.4672 53.4936 46.6753 53.4936H69.3002C69.5083 53.4936 69.7079 53.4109 69.8551 53.2637C70.0022 53.1166 70.0849 52.917 70.0849 52.7089V51.405C70.0848 51.1704 70.0217 50.9401 69.902 50.7384C69.7824 50.5366 69.6106 50.3707 69.4048 50.2581L59.2432 44.6999C58.8583 44.4893 58.4266 44.3789 57.9878 44.3789C57.549 44.3789 57.1172 44.4893 56.7323 44.6999Z"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs></Defs>
  </Svg>
);
export default BankTransferIcon;
