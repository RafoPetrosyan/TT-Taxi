import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ProfileIcon(props) {
   return (
      <Svg
         width={28}
         height={30}
         viewBox="0 0 28 30"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            d="M14 14.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75zM1 28.875c.824-2.529 2.525-4.76 4.86-6.377 2.335-1.617 5.184-2.535 8.14-2.623 5.951 0 11.021 3.741 13 9"
            stroke={props.stroke || '#BDB7C2'}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </Svg>
   );
}

export default ProfileIcon;
