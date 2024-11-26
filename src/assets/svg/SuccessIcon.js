import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SuccessIcon(props) {
   return (
      <Svg
         width={70}
         height={70}
         viewBox="0 0 70 70"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            d="M35 0C15.7 0 0 15.701 0 35s15.7 35 35 35c19.299 0 35-15.701 35-35S54.299 0 35 0zm0 65.41C18.231 65.41 4.59 51.768 4.59 35S18.231 4.59 35 4.59c16.767 0 30.41 13.642 30.41 30.41S51.766 65.41 35 65.41z"
            fill="#59BE59"
         />
         <Path
            d="M47.671 23.542L29.623 41.59l-7.295-7.294a2.295 2.295 0 00-3.246 3.246l8.919 8.918a2.29 2.29 0 001.622.671 2.29 2.29 0 001.624-.672c.001-.002.002-.004.005-.006l19.664-19.665a2.294 2.294 0 10-3.245-3.245z"
            fill="#59BE59"
         />
      </Svg>
   );
}

export default SuccessIcon;
