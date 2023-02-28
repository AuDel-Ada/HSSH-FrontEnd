import React from 'react';

import { IHsshButtonType } from '../types/hsshButtonProps.type';

const HsshButton: React.FC<IHsshButtonType> = (props) => {
  return (
    <button
      className="px-4 py-2 border-2 border-solid text-slate-50 w-full hover:bg-slate-50 hover:text-black"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default HsshButton;
