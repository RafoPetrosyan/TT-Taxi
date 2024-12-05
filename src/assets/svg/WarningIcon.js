import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function WarningIcon(props) {
   return (
      <Svg
         width={70}
         height={70}
         viewBox="0 0 70 70"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Circle cx={35} cy={35} r={32.9517} stroke="#CC252B" strokeWidth={4.09653} />
         <Path
            d="M31.738 20.908l1.258 22.179a1.745 1.745 0 003.483 0l1.258-22.18a3.004 3.004 0 10-5.999 0zM34.738 48.537a1.745 1.745 0 00-1.742 1.742 1.745 1.745 0 001.742 1.742 1.745 1.745 0 001.742-1.742 1.745 1.745 0 00-1.742-1.742z"
            fill="#CC252B"
         />
      </Svg>
   );
}

export default WarningIcon;
