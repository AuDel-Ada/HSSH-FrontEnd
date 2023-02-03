import React from 'react';
import { ParentComponentProps } from '../types/parentComponentProps.type';

const LayoutBlack: React.FC<ParentComponentProps> = (props) => {
  const { childComponent } = props;
  return (
    <div className="bg-black text-slate-50 flex h-screen w-screen bg-repeat	">
      <div className="page-wrapper justify-center">{childComponent}</div>
    </div>
  );
};

export default LayoutBlack;