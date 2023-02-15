import React from 'react';
import type { HsshButtonType } from '../types/hsshButtonProps.type';

const HsshButton: React.FC<HsshButtonType> = (props) => {
  return (
    <button
      className="px-4 py-2 border-2 border-solid text-slate-50 w-full"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default HsshButton;
