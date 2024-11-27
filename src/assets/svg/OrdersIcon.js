import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function OrdersIcon(props) {
   return (
      <Svg
         width={24}
         height={24}
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            d="M17 4H7a2 2 0 00-2 2v13a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2z"
            stroke={props.stroke || '#222'}
         />
         <Path d="M9 9h6M9 13h6M9 17h4" stroke={props.stroke || '#222'} strokeLinecap="round" />
      </Svg>
   );
}

export default OrdersIcon;
