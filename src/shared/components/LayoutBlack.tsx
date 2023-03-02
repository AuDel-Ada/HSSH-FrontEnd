import React from 'react';
import { IParentComponentProps } from '../types/parentComponentProps.type';

const LayoutBlack: React.FC<IParentComponentProps> = (props) => {
  const { childComponent } = props;
  return (
    <div className="bg-black text-slate-50 flex w-screen">
      <div className="page-wrapper justify-center">{childComponent}</div>
    </div>
  );
};

export default LayoutBlack;
