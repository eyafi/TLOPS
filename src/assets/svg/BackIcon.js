import React from 'react';
import { Path, Svg } from 'react-native-svg';

const BackIcon = ({
  width = 16,
  height = 16
}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <Path
        fill="#fff"
        d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16V7Z"
      />
    </Svg>
  );
};

export default BackIcon;