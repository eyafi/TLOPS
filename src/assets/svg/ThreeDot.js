import React from 'react';
import { Path, Svg } from 'react-native-svg';

const ThreeDot = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
    >
      <Path
        fill="#000"
        fillOpacity={0.54}
        d="M10 6.667c.917 0 1.667-.75 1.667-1.667S10.917 3.333 10 3.333 8.333 4.083 8.333 5 9.083 6.667 10 6.667Zm0 1.666c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667 1.667-.75 1.667-1.667-.75-1.667-1.667-1.667Zm0 5c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667 1.667-.75 1.667-1.667-.75-1.667-1.667-1.667Z"
      />
    </Svg>
  );
};

export default ThreeDot;