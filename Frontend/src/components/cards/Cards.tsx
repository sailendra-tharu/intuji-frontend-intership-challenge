// import { Divider } from 'antd';
// import { ReactNode } from 'react';
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import PerfectScrollbar from 'react-perfect-scrollbar';

// import { Text } from '~/components/atomic';
// import {
//   CardEditPencilStyled,
//   CardTagStyled,
//   PageCardWrapper,
// } from '~/components/pageHeaderComponent/Styled';

// interface CardProps {
//   title?: string;
//   rightTitleIcon?: ReactNode;
//   numberText?: string;
//   icon?: ReactNode;
//   type?: string;
//   children?: React.ReactNode;
//   className?: string;
// }
// const Card = ({ title, icon, children, rightTitleIcon, numberText, className }: CardProps) => {
//   return (
//     <PageCardWrapper className={` flex flex-col p-0  ${className}`}>
//       <div className=' w-full flex justify-between  px-2'>
//         <div className=' flex justify-between  items-center gap-2  py-2  '>
//           {icon}
//           <Text type='text' size='sm' weight='medium' color='#000' className='flex-grow'>
//             {title}
//           </Text>
//           {numberText && (
//             <CardTagStyled className='flex ml-2 items-center justify-center w-[24px] h-[20px] rounded border-none  bg-[#667085] '>
//               <Text type='text' size='sm' weight='medium' color='#fff' className='cursor-pointer'>
//                 {numberText}
//               </Text>
//             </CardTagStyled>
//           )}
//         </div>
//         {rightTitleIcon && <CardEditPencilStyled>{rightTitleIcon}</CardEditPencilStyled>}
//       </div>
//       <Divider className='bg-[#EAECF0] m-0 ' />
//       <PerfectScrollbar className='overflow-y-scroll'>
//         <div className='w-full h-full p-3 '>{children}</div>
//       </PerfectScrollbar>
//     </PageCardWrapper>
//   );
// };

// export default Card;
