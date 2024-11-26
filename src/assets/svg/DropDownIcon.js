import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DropDownIcon(props) {
   return (
      <Svg
         width={16}
         height={9}
         viewBox="0 0 16 9"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            d="M8 8.286a.736.736 0 01-.525-.215L.725 1.643a.684.684 0 010-1.014.769.769 0 011.065 0l6.225 5.928 6.21-5.914a.769.769 0 011.065 0c.3.286.3.728 0 1.014L8.54 8.086a.772.772 0 01-.525.214L8 8.286z"
            fill="#9AA2AE"
         />
      </Svg>
   );
}

export default DropDownIcon;
