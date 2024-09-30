// import React from 'react';
// import { t } from 'i18next';
// import { Input } from 'antd';
// import { kMaxLength } from 'buffer';
// import styled from 'styled-components';
// import { FiSearch } from 'react-icons/fi';

// export const StyledInput = styled(Input)`
//   &.ant-input-affix-wrapper {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     padding: 8px 12px;
//     border-radius: 8px;
//     border: 1px solid #98a2b3;
//     box-shadow: 0px 1px 2px #1018280d;
//     height: 40px !important;
//     .ant-input-prefix {
//       margin-inline-end: 0px !important;
//     }
//     input.ant-input::placeholder {
//       font-weight: 400;
//       color: #667085;
//       font-size: 16px;
//       line-height: 24px;
//     }
//     &-sm {
//       padding: 6px 12px;
//     }
//   }
// `;
// interface ISearchInputProps {
//   size?: 'large' | 'small';
//   placeholder?: string;
//   className?: string;
//   onChange?: any;
//   prefix?: any;
//   maxLength?: any;
// }

// const SearchInput: React.FC<ISearchInputProps> = ({
//   size = 'large',
//   placeholder = t('search'),
//   className,
//   onChange,
//   prefix,
//   maxLength,
// }) => (
//   <StyledInput
//     maxLength={maxLength}
//     className={className}
//     size={size}
//     placeholder={placeholder}
//     onChange={onChange}
//     prefix={prefix ?? <FiSearch color='#667085' size={20} className='mr-[8px]' />}
//   />
// );

// export default SearchInput;
