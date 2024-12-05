import * as React from 'react';
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg';

function DriverIcon(props) {
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
            d="M12.2 12.5a5 5 0 100-10 5 5 0 000 10zM3 22.5a9.71 9.71 0 019-7"
            stroke={props.stroke || '#414141'}
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <G clipPath="url(#clip0_229_811)" stroke={props.stroke || '#414141'}>
            <Path
               d="M18.5 23.828a5.328 5.328 0 100-10.656 5.328 5.328 0 000 10.656z"
               strokeWidth={0.3}
            />
            <Path d="M18.5 23.14a4.64 4.64 0 100-9.28 4.64 4.64 0 000 9.28z" strokeWidth={0.4} />
            <Path
               d="M14.031 19.772a3.01 3.01 0 01.688-.069c1.701 0 3.094 1.272 3.094 2.836 0 .19-.018.361-.052.533M23.124 18.087c-1.186-.807-2.82-1.306-4.624-1.306-1.805 0-3.437.499-4.623 1.306M19.24 23.072a2.797 2.797 0 01-.052-.533c0-1.564 1.392-2.836 3.093-2.836.24 0 .464.017.688.069"
               strokeWidth={0.588235}
            />
            <Path
               d="M18.5 19.016a.516.516 0 100-1.031.516.516 0 000 1.03z"
               strokeWidth={0.588235}
            />
         </G>
         <Defs>
            <ClipPath id="clip0_229_811">
               <Path fill="#fff" transform="translate(13 13)" d="M0 0H11V11H0z" />
            </ClipPath>
         </Defs>
      </Svg>
   );
}

export default DriverIcon;
