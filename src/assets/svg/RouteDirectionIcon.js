import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function RouteDirectionIcon(props) {
   return (
      <Svg
         width={24}
         height={23}
         viewBox="0 0 24 23"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            d="M20.782 11.5c0 4.587-3.747 8.306-8.368 8.306m8.368-8.306c0-4.587-3.747-8.306-8.368-8.306m8.368 8.306h2.39m-10.758 8.306c-4.622 0-8.368-3.719-8.368-8.306m8.368 8.306v2.373m0-18.985c-4.622 0-8.368 3.719-8.368 8.306m8.368-8.306V.821M4.046 11.5h-2.39M16 11.5c0 1.966-1.606 3.56-3.586 3.56-1.98 0-3.586-1.594-3.586-3.56s1.605-3.56 3.586-3.56C14.394 7.94 16 9.534 16 11.5z"
            stroke="#D59608"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </Svg>
   );
}

export default RouteDirectionIcon;
