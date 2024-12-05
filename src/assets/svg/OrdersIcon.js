import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function OrdersIcon(props) {
   return (
      <Svg
         width={24}
         height={25}
         viewBox="0 0 24 25"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            d="M19.143 2H4.857C3.28 2 2 3.106 2 4.47v16.06C2 21.893 3.28 23 4.857 23h14.286C20.72 23 22 21.894 22 20.53V4.47C22 3.107 20.72 2 19.143 2z"
            stroke={props.stroke || '#414141'}
            strokeWidth={0.8}
         />
         <Path
            d="M7 9h10M7 13h10M7 17h7"
            stroke={props.stroke || '#414141'}
            strokeLinecap="round"
         />
      </Svg>
   );
}

export default OrdersIcon;
