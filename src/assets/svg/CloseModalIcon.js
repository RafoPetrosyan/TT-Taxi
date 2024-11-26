import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CloseModalIcon(props) {
   return (
      <Svg
         width={23}
         height={23}
         viewBox="0 0 23 23"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            d="M3.22 19.614l16.56-16.56M3.22 3.054l16.56 16.56"
            stroke="#9AA2AE"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </Svg>
   );
}

export default CloseModalIcon;
