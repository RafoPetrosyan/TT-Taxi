import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function LocationIcon(props) {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width={24}
         height={24}
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth={1}
         strokeLinecap="round"
         strokeLinejoin="round"
         className="lucide lucide-map-pin"
         {...props}
      >
         <Path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 01-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0116 0" />
         <Circle cx={12} cy={10} r={3} />
      </Svg>
   );
}

export default LocationIcon;
