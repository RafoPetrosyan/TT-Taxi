import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function PlusIcon(props) {
   return (
      <Svg
         width={20}
         height={20}
         viewBox="0 0 20 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            d="M9.75 1v17.5M1 9.75h17.5"
            stroke="#fff"
            strokeWidth={1.3}
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </Svg>
   );
}

export default PlusIcon;
