import React from 'react';
import { Svg, Path } from 'react-native-svg';

const RightArrow = ({
  width = 16,
  height = 16,
  fill = '#fff',
  style = {},
}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <Path
        fill={fill}
        d="M8 0 6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8-8-8Z"
      />
    </Svg>
  );
};

export default RightArrow;