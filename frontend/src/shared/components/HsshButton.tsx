import React from 'react';
import type { HsshButtonType } from '../types/hsshButtonProps.type';

const HsshButton: React.FC<HsshButtonType> = (props) => {
  return (
    <button
      className="px-2 py-0.5 border-2 border-solid border-white w-full"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default HsshButton;
