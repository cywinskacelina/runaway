import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Embarrased(props) {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <Path
        d="M48 24c0 13.255-10.745 24-24 24C10.747 48 0 37.255 0 24 0 10.747 10.747 0 24 0c13.255 0 24 10.747 24 24z"
        fill="#FFCC4D"
      />
      <Path
        d="M38.667 37.333a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM9.333 37.333a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333z"
        fill="#FF7892"
      />
      <Path
        d="M32.667 29.333a7.333 7.333 0 100-14.666 7.333 7.333 0 000 14.666zM15.333 29.333a7.333 7.333 0 100-14.666 7.333 7.333 0 000 14.666z"
        fill="#F5F8FA"
      />
      <Path
        d="M15.333 25.333a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zM32.667 25.333a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666z"
        fill="#292F33"
      />
      <Path
        d="M29.333 40H18.667a1.333 1.333 0 110-2.667h10.666a1.332 1.332 0 110 2.667zm10.668-25.333a1.33 1.33 0 01-1.068-.534c-3.52-4.694-8.081-4.797-8.274-4.8a1.336 1.336 0 01-1.322-1.34 1.33 1.33 0 011.33-1.326c.245 0 6.049.066 10.4 5.866A1.332 1.332 0 0140 14.667zM8 14.667a1.334 1.334 0 01-1.065-2.133c4.349-5.8 10.154-5.867 10.4-5.867a1.334 1.334 0 01.005 2.666c-.207.003-4.758.115-8.272 4.8a1.33 1.33 0 01-1.068.534z"
        fill="#664500"
      />
    </Svg>
  );
}

export default Embarrased;