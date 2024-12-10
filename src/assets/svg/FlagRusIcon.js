import * as React from 'react';
import Svg, { Path, Defs, G, ClipPath, Rect } from 'react-native-svg';

function FlagRusIcon(props) {
   return (
      <Svg
         width={24}
         height={18}
         viewBox="0 0 18 12"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <G clipPath="url(#clip0_2020_76052)">
            <Path fill="#EDEDF0" d="M0 0H18V3.75H0z" />
            <Path fill="#0090FF" d="M0 3.75H18V8.25H0z" />
            <Path fill="#FF2E3A" d="M0 8.25H18V12H0z" />
         </G>
         <Defs>
            <ClipPath id="clip0_2020_76052">
               <Rect width={18} height={12} rx={1.5} fill="#fff" />
            </ClipPath>
         </Defs>
      </Svg>
   );
}

export default FlagRusIcon;
