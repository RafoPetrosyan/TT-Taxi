import * as React from 'react';
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg';

function ClockIcon(props) {
   return (
      <Svg
         width={25}
         height={25}
         viewBox="0 0 25 25"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <G clipPath="url(#clip0_41_995)">
            <Path d="M25 0H0v25h25V0z" fill="#fff" />
            <Path
               d="M12.5 21.875a9.375 9.375 0 100-18.75 9.375 9.375 0 100 18.75z"
               stroke="#D59608"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <Path
               d="M12.5 6.25v6.25H6.25"
               stroke="#D59608"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </G>
         <Defs>
            <ClipPath id="clip0_41_995">
               <Path fill="#fff" d="M0 0H25V25H0z" />
            </ClipPath>
         </Defs>
      </Svg>
   );
}

export default ClockIcon;
