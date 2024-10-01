import { memo } from 'react';

interface LabelProps {
  id?: string;
  children: React.ReactNode;
  required?: boolean;
}

const Label = ({ id = 'id', children, required = false }: LabelProps) => {
  return (
    <label
      htmlFor={id}
      data-test-id={`${id}-test-label`}
      // className='text-[calc(6.5px+0.390625vw)] leading-[calc(12.5px+0.390625vw)] font-medium text-gray-700 inline-block'
      className='text-[14px] leading-[20px] font-medium text-gray-700 inline-block'
    >
      {children}
      {required && <span className='text-gray-700'>*</span>}
    </label>
  );
};

export default memo(Label);
