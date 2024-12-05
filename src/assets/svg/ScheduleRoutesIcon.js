import * as React from 'react';
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';

function ScheduleRoutesIcon(props) {
   return (
      <Svg
         width={22}
         height={24}
         viewBox="0 0 22 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            d="M20.5 13V3.47C20.5 2.107 19.22 1 17.643 1H3.357C1.78 1 .5 2.106.5 3.47v16.06C.5 20.893 1.78 22 3.357 22H11"
            stroke={props.stroke || '#414141'}
            strokeWidth={0.8}
            strokeLinecap="round"
         />
         <G clipPath="url(#clip0_229_797)">
            <Path
               d="M15.18 9.8H8.273a.305.305 0 000 .609h6.907a.305.305 0 000-.61zM8.273 5.94h6.907a.305.305 0 000-.61H8.273a.305.305 0 000 .61zM5.43 13.05h-.813c-.617 0-1.116.5-1.117 1.116v.813c0 .617.5 1.116 1.117 1.117h.813c.616 0 1.116-.5 1.117-1.117v-.813c0-.616-.5-1.116-1.117-1.117zm.508 1.929c0 .28-.228.507-.508.508h-.813a.509.509 0 01-.508-.508v-.813c0-.28.228-.507.508-.507h.813c.28 0 .507.227.508.507v.813zm6.242-.711H8.273a.305.305 0 000 .61h3.907a.305.305 0 000-.61zM6.83 8.566l-2.223 2.43-.588-.583a.305.305 0 00-.43.433l.813.806.006.003.003.006a.296.296 0 00.41-.006l.012-.004.002-.005.007-.004 2.437-2.665a.305.305 0 00-.45-.41zm0-4.469l-2.223 2.43-.588-.583a.305.305 0 00-.43.433l.813.807.006.002.003.006a.295.295 0 00.412-.006l.01-.004.002-.004.006-.005L7.28 4.508a.305.305 0 00-.45-.41z"
               fill="#414141"
            />
         </G>
         <G clipPath="url(#clip1_229_797)" stroke={props.stroke || '#414141'} strokeLinecap="round">
            <Path
               d="M16.718 22.696a3.913 3.913 0 100-7.826 3.913 3.913 0 000 7.826z"
               strokeWidth={0.8}
            />
            <Path d="M16.5 16.917V19h2.083" strokeWidth={0.5} />
         </G>
         <Defs>
            <ClipPath id="clip0_229_797">
               <Path fill="#fff" transform="translate(3.5 5)" d="M0 0H12V12H0z" />
            </ClipPath>
            <ClipPath id="clip1_229_797">
               <Path fill="#fff" transform="translate(11.5 14)" d="M0 0H10V10H0z" />
            </ClipPath>
         </Defs>
      </Svg>
   );
}

export default ScheduleRoutesIcon;
