import React from 'react';
import { Path, Svg } from 'react-native-svg';

const QRIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      fill="none"
    >
      <Path
        fill="#E67E22"
        d="M3.25 3.25h8.667v8.667H3.25V3.25Zm1.733 1.733v5.2h5.2v-5.2h-5.2Z"
      />
      <Path
        fill="#E67E22"
        fillRule="evenodd"
        d="M6.5 6.5h2.167v2.167H6.5V6.5Z"
        clipRule="evenodd"
      />
      <Path
        fill="#E67E22"
        d="M14.083 3.25h8.667v8.667h-8.667V3.25Zm1.734 1.733v5.2h5.2v-5.2h-5.2Z"
      />
      <Path
        fill="#E67E22"
        fillRule="evenodd"
        d="M17.333 6.5H19.5v2.167h-2.167V6.5Z"
        clipRule="evenodd"
      />
      <Path
        fill="#E67E22"
        d="M3.25 14.083h8.667v8.667H3.25v-8.667Zm1.733 1.734v5.2h5.2v-5.2h-5.2Z"
      />
      <Path
        fill="#E67E22"
        fillRule="evenodd"
        d="M6.5 17.333h2.167V19.5H6.5v-2.167Z"
        clipRule="evenodd"
      />
      <Path
        fill="#E67E22"
        d="M22.75 19.283h-3.467v3.467h-5.2v-8.667h.867-.867v5.2h1.734v1.734h1.733v-5.2h-1.733v-1.734h-.867 2.6v1.734h1.733v1.733h1.734v-3.467h1.733v5.2Zm0 1.734v1.733h-1.733v-1.733h1.733Z"
      />
    </Svg>
  );
};

export default QRIcon;