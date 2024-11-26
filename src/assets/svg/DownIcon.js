import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DownIcon(props) {
   return (
      <Svg
         width={9}
         height={11}
         viewBox="0 0 9 11"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            d="M4.572 1.25v8.5m0 0l3.531-3.542M4.573 9.75L1.04 6.208"
            stroke="#fff"
            strokeWidth={0.7}
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </Svg>
   );
}

export default DownIcon;
