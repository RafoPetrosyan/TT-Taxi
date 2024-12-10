import * as React from 'react';
import Svg, { Path, Defs, G, ClipPath } from 'react-native-svg';

function FlagArmIcon(props) {
   return (
      <Svg
         width={24}
         height={18}
         viewBox="0 0 24 18"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <G clipPath="url(#clip0_321_491)">
            <Path
               d="M21.333.333H2.667A2.667 2.667 0 000 3v2.667h24V3A2.667 2.667 0 0021.333.333z"
               fill="#D90012"
            />
            <Path d="M0 5.667h24v6.666H0V5.667z" fill="#0033A0" />
            <Path
               d="M2.667 17.667h18.666A2.667 2.667 0 0024 15v-2.667H0V15a2.667 2.667 0 002.667 2.667z"
               fill="#F2A800"
            />
         </G>
         <Defs>
            <ClipPath id="clip0_321_491">
               <Path fill="#fff" d="M0 0H24V18H0z" />
            </ClipPath>
         </Defs>
      </Svg>
   );
}

export default FlagArmIcon;
