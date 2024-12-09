import * as React from 'react';
import Svg, { Path, Defs, G, ClipPath, Rect } from 'react-native-svg';

function FlagArmIcon(props) {
   return (
      <Svg
         width={18}
         height={12}
         viewBox="0 0 18 12"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <G clipPath="url(#clip0_2020_76051)">
            <Path fill="#FF2E3A" d="M0 0H18V4.125H0z" />
            <Path fill="#0090FF" d="M0 4.125H18V7.875H0z" />
            <Path fill="#FFC12E" d="M0 7.875H18V12H0z" />
         </G>
         <Defs>
            <ClipPath id="clip0_2020_76051">
               <Rect width={18} height={12} rx={1.5} fill="#fff" />
            </ClipPath>
         </Defs>
      </Svg>
   );
}

export default FlagArmIcon;
