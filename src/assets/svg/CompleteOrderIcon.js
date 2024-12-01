import * as React from 'react';
import Svg, { Circle, ClipPath, Defs, G, Path } from 'react-native-svg';

function CompleteOrderIcon(props) {
   return (
      <Svg
         width={168}
         height={143}
         viewBox="0 0 168 143"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Circle cx={7} cy={98} r={7} fill="#D59608" />
         <Circle cx={26} cy={12} r={8} fill="#D59608" />
         <Circle cx={140.5} cy={30.5} r={5.5} fill="#D59608" />
         <Circle cx={74.5} cy={7.5} r={4.5} fill="#D59608" />
         <Circle cx={165} cy={84} r={3} fill="#D59608" />
         <Circle cx={113.5} cy={132.5} r={4.5} fill="#D59608" />
         <Circle cx={46} cy={140} r={3} fill="#D59608" />
         <Circle cx={141} cy={101} r={3} fill="#D59608" />
         <Circle cx={21.5} cy={49.5} r={2.5} fill="#D59608" />
         <Circle cx={107} cy={2} r={2} fill="#D59608" />
         <Circle cx={84} cy={74} r={54} fill="#D59608" />
         <G clipPath="url(#clip0_3_517)" fill="#fff">
            <Path d="M60.619 68.67c.242-.525.705-1.39 1.523-2.91.372-.7.79-1.471 1.22-2.264h-3.755A2.597 2.597 0 0057 66.085a2.596 2.596 0 002.607 2.585h1.012zM108.393 63.496h-3.754c.43.793.847 1.565 1.219 2.263.818 1.521 1.279 2.386 1.523 2.911h1.012A2.596 2.596 0 00111 66.085a2.597 2.597 0 00-2.607-2.59zM61.154 91.1c0 1.927 1.576 3.489 3.516 3.489s3.513-1.562 3.513-3.489v-3.298h-7.029V91.1zM99.814 91.1c0 1.927 1.575 3.489 3.517 3.489 1.941 0 3.515-1.562 3.515-3.489v-3.298h-7.032V91.1zM106.346 69.321c.178.05-6.506-12.123-6.826-12.78-.843-1.746-2.93-2.796-4.963-2.796H85.66h-12.22c-2.035 0-4.116 1.05-4.962 2.795-.32.658-7.002 12.832-6.825 12.781 0 0-2.162 2.14-2.327 2.31-.91.97-.844 1.81-.844 2.649v9.688c0 1.809.323 2.798 2.472 2.798h46.09c2.149 0 2.475-.989 2.475-2.798V74.28c0-.84.063-1.678-.85-2.65-.158-.17-2.324-2.309-2.324-2.309zm-39.162-3.735s4.293-7.673 4.545-8.175c.436-.86 1.671-1.48 2.935-1.48h18.672c1.265 0 2.5.62 2.935 1.48.253.502 4.546 8.175 4.546 8.175.396.707.046 2.021-1.125 2.021H68.308c-1.172 0-1.52-1.314-1.124-2.021zm-.573 17.066c-2.179 0-3.945-1.752-3.945-3.914 0-2.164 1.766-3.915 3.945-3.915 2.178 0 3.943 1.751 3.943 3.915 0 2.162-1.765 3.914-3.943 3.914zm23.378 1.058a.52.52 0 01-.521.518H78.534a.52.52 0 01-.523-.518v-4.78c0-.284.234-.514.523-.514h10.934c.287 0 .52.23.52.513v4.78zm11.4-1.058c-2.178 0-3.947-1.752-3.947-3.914 0-2.164 1.769-3.915 3.947-3.915 2.179 0 3.945 1.753 3.945 3.915s-1.766 3.914-3.945 3.914z" />
         </G>
         <Defs>
            <ClipPath id="clip0_3_517">
               <Path fill="#fff" transform="translate(57 52)" d="M0 0H54V44H0z" />
            </ClipPath>
         </Defs>
      </Svg>
   );
}

export default CompleteOrderIcon;
