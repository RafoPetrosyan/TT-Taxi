import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function PeopleIcon(props) {
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
            d="M12 16.437a7.604 7.604 0 00-7.378 5.892l-.01.051a.563.563 0 001.098.244l.001-.004c.657-2.914 3.223-5.058 6.29-5.058a6.442 6.442 0 016.281 5.015l.008.043a.56.56 0 00.674.428l-.004.001a.563.563 0 00.429-.674v.004c-.783-3.415-3.79-5.927-7.386-5.943h-.002l-.001.001zM6.873 7.951a3.507 3.507 0 100-7.013 3.507 3.507 0 000 7.014zm0-5.888a2.382 2.382 0 110 4.764 2.382 2.382 0 010-4.764zm10.322 5.889a3.507 3.507 0 100-7.014 3.507 3.507 0 00-.001 7.014zm0-5.89a2.382 2.382 0 110 4.765 2.382 2.382 0 010-4.764zm5.921 12.818c-.658-2.92-3.23-5.07-6.304-5.07-.317 0-.63.024-.935.067l.035-.004a.537.537 0 00-.1.035l.003-.001c-.563-1.597-2.058-2.72-3.816-2.72a4.04 4.04 0 00-3.801 2.67l-.01.029c-.012-.003-.022-.01-.035-.013-.269-.04-.58-.063-.896-.063h-.005a6.49 6.49 0 00-6.294 5.026l-.008.043a.563.563 0 001.098.244v-.004c.553-2.405 2.67-4.174 5.203-4.184h.002c.25 0 .498.018.738.053l-.027-.003c-.006.089-.027.174-.027.265a4.063 4.063 0 008.124 0c0-.09-.02-.175-.027-.265.012-.001.024.004.036.001a5.08 5.08 0 01.735-.051h.008a5.355 5.355 0 015.197 4.148l.006.036a.564.564 0 00.673.428l-.004.001a.563.563 0 00.43-.673v.004l.002.001zM12 14.187a2.938 2.938 0 112.937-2.938v.001A2.94 2.94 0 0112 14.187z"
            fill="#D59608"
         />
      </Svg>
   );
}

export default PeopleIcon;