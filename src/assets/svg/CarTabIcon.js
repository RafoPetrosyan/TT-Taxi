import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CarTabIcon(props) {
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
            d="M1 8.2l3.327 2.722c.22.18.496.278.782.278h13.782c.286 0 .563-.098.782-.278L23 8.2M5.278 15.4h.012m13.432 0h.012M7.307 4h9.386c.877 0 1.687.461 2.122 1.21l3.54 6.083c.423.726.645 1.546.645 2.382V20.8c0 .663-.547 1.2-1.222 1.2h-1.222a1.211 1.211 0 01-1.223-1.2v-1.2H4.667v1.2c0 .663-.548 1.2-1.223 1.2H2.222A1.211 1.211 0 011 20.8v-7.125c0-.836.222-1.657.644-2.382L5.185 5.21A2.453 2.453 0 017.307 4zM5.89 15.4c0 .331-.274.6-.611.6a.606.606 0 01-.611-.6c0-.331.273-.6.61-.6.338 0 .612.269.612.6zm13.444 0c0 .331-.273.6-.61.6a.606.606 0 01-.612-.6c0-.331.274-.6.611-.6.338 0 .611.269.611.6z"
            stroke={props.stroke || '#414141'}
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </Svg>
   );
}

export default CarTabIcon;
