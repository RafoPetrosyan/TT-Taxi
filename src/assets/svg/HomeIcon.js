import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function HomeIcon(props) {
   return (
      <Svg
         width={25}
         height={26}
         viewBox="0 0 25 26"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.828 24.33v-3.961c0-1.008.821-1.827 1.84-1.833h3.727c1.023 0 1.852.82 1.852 1.832v3.974c0 .856.689 1.555 1.553 1.575h2.485c2.477 0 4.486-1.989 4.486-4.441V10.207a3.151 3.151 0 00-1.243-2.46l-8.5-6.778a4.108 4.108 0 00-5.094 0l-8.462 6.79a3.126 3.126 0 00-1.243 2.46v11.257c0 2.452 2.009 4.44 4.486 4.44H7.2c.886 0 1.603-.71 1.603-1.586"
            fill={props.fill || '#EAB337'}
            stroke={props.stroke || '#BDB7C2'}
            strokeWidth={1.5}
         />
      </Svg>
   );
}

export default HomeIcon;
