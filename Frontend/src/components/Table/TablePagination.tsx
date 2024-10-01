// import styled from 'styled-components';
// import { Pagination as AntPagination, PaginationProps } from 'antd';

// import { LeftArrowIcon, RightArrowIcon } from '../icons';
// import { Text } from '../atomic';

// const StyledPagination = styled(AntPagination)`
//   &.ant-pagination {
//     display: flex;
//     justify-content: center;
//     padding: 14px 24px;
//     margin: 0 !important;
//     width: 100%;
//     position: relative;
//     border-radius: 0 0 12px 12px;
//     grid-template-columns: repeat(auto-fit, minmax(20px, 2fr)) !important;
//     border-right: 1px solid ${({ theme }) => theme.colors.gray.g2};
//     border-left: 1px solid ${({ theme }) => theme.colors.gray.g2};
//     border-bottom: 1px solid ${({ theme }) => theme.colors.gray.g2};
//     box-shadow: ${({ theme }) => theme.shadows.xs};

//     .ant-pagination-prev {
//       position: absolute;
//       bottom: 11px;
//       right: 140px;
//       margin: 0;
//       padding: 8px 0 !important;
//     }
//     li:not(:first-child):not(:last-child) {
//       justify-content: center !important;
//     }
//     .ant-pagination-next {
//       position: absolute;
//       right: 24px;
//       bottom: 11px;
//     }
//     .ant-pagination-next.ant-pagination-disabled,
//     .ant-pagination-prev.ant-pagination-disabled {
//       background: ${({ theme }) => theme.colors.gray.g2} !important;
//       border: 1px solid ${({ theme }) => theme.colors.gray.g1} !important;
//       cursor: not-allowed !important;
//       > button > div {
//         color: #98a2b3 !important;
//         cursor: not-allowed !important;
//       }
//       > button > svg {
//         cursor: not-allowed !important;
//         color: ${({ theme }) => theme.colors.gray.g4} !important;
//       }
//     }
//     .ant-pagination-options {
//       position: absolute;
//       left: 0;
//       bottom: 15px;
//       .ant-select {
//         .ant-select-selector {
//           cursor: pointer !important;
//         }
//       }
//     }
//     &.ant-pagination::after {
//       display: none;
//       content: none !important;
//     }
//     .ant-pagination-prev,
//     .ant-pagination-next,
//     .ant-select-selector {
//       height: 36px;
//       display: flex;
//       padding: 8px 12px;
//       justify-content: center;
//       align-items: center;
//       gap: 4px;
//       border-radius: 8px;
//       border: 1px solid var(--Gray-300, #d0d5dd) !important;
//       background: var(--Base-White, #fff) !important;
//       box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05) !important;
//     }
//   }
// `;

// const TablePagination = ({ total, totalPages, current, pageSize, onChange }: any) => {
//   const itemRender: PaginationProps['itemRender'] = (current, type, originalElement) => {
//     if (type === 'prev') {
//       return (
//         <button className='flex gap-1 px-3 py-2 justify-center items-center'>
//           <LeftArrowIcon />
//           <Text type='text' size='sm' weight='semibold' color='#344054'>
//             Previous
//           </Text>
//         </button>
//       );
//     }
//     if (type === 'next') {
//       return (
//         <button className='flex gap-1 px-3 py-2 justify-center items-center'>
//           <Text type='text' size='sm' weight='semibold' color='#344054'>
//             Next
//           </Text>
//           <RightArrowIcon />
//         </button>
//       );
//     }
//     return originalElement;
//   };

//   return (
//     <>
//       {total > 0 && (
//         <StyledPagination
//           total={total}
//           current={current}
//           pageSize={pageSize}
//           onChange={onChange}
//           itemRender={itemRender}
//           showSizeChanger={true}
//         />
//       )}
//     </>
//   );
// };

// export default TablePagination;
