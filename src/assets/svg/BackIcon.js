import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function BackIcon(props) {
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
            d="M9.254.241c.298.292.325.75.081 1.072l-.08.092L2.526 8l6.727 6.595c.298.292.325.75.081 1.072l-.08.092a.852.852 0 01-1.094.08l-.094-.08L.746 8.582A.811.811 0 01.665 7.51l.08-.092L8.068.241a.852.852 0 011.187 0z"
            fill="#818195"
         />
      </Svg>
   );
}

export default BackIcon;
