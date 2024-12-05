import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function RightArrowIcon(props) {
   return (
      <Svg
         width={10}
         height={16}
         viewBox="0 0 10 16"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            d="M.746.241a.811.811 0 00-.081 1.072l.08.092L7.474 8 .746 14.595a.811.811 0 00-.081 1.072l.08.092a.852.852 0 001.094.08l.094-.08 7.321-7.177a.811.811 0 00.081-1.072l-.08-.092L1.932.241a.852.852 0 00-1.187 0z"
            fill="#BDB7C2"
         />
      </Svg>
   );
}

export default RightArrowIcon;
