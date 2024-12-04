import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function NotificationIcon(props) {
   return (
      <Svg
         width={32}
         height={32}
         viewBox="0 0 32 32"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            clipRule="evenodd"
            d="M16 23.797c7.519 0 10.997-.965 11.333-4.836 0-3.87-2.425-3.62-2.425-8.367 0-3.708-3.514-7.927-8.908-7.927s-8.908 4.219-8.908 7.927c0 4.747-2.425 4.498-2.425 8.367.337 3.886 3.815 4.836 11.333 4.836z"
            stroke={props.stroke || '#BDB7C2'}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <Path
            d="M19.185 27.81c-1.819 2.02-4.656 2.043-6.492 0"
            stroke={props.stroke || '#BDB7C2'}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </Svg>
   );
}

export default NotificationIcon;
