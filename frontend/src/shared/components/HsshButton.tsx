import React from 'react';
import type { HsshButtonType } from '../types/hsshButtonType';

const HsshButton: React.FC = (props: HsshButtonType) => {
  return (
    <button
      className="mx-4 px-2 py-0.5 border-2 border-solid border-white"
      onClick={props.action}
    >
      {props.text}
    </button>
  );
};

export default HsshButton;

// TODO: fix ts error