import React from 'react';
import { ParentComponentProps } from '../types/parentComponentProps.type';

const Box: React.FC<ParentComponentProps> = (props) => {
  const { childComponent } = props;
  return (
    <div className="bg-transparent border-solid border-slate-50 border-2 p-4 m-4">
      {childComponent}
    </div>
  );
};

export default Box;
