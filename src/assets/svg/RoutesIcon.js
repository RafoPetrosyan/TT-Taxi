import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function RoutesIcon(props) {
   return (
      <Svg
         width={52}
         height={52}
         viewBox="0 0 52 52"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            d="M34.429 13H16.57C14.6 13 13 14.383 13 16.088v20.074c0 1.705 1.599 3.088 3.571 3.088H34.43C36.4 39.25 38 37.867 38 36.162V16.088C38 14.383 36.401 13 34.429 13z"
            stroke={props.borderStroke || '#BDB7C2'}
            strokeWidth={1.5}
         />
         <Path
            d="M19.25 21.75h12.5M19.25 26.75h12.5M19.25 31.75H28"
            stroke={props.stroke || '#BDB7C2'}
            strokeWidth={1.25}
            strokeLinecap="round"
         />
      </Svg>
   );
}

export default RoutesIcon;
