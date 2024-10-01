// import { Button } from 'antd';

// import { Text } from '../atomic';
// import { Modal } from '../Modals/Styled';

// interface LogoutModalProps {
//   isModalOpen: boolean;
//   handleCancel: () => void;
//   handleLogout: () => void;
// }

// const LogoutModal = ({ isModalOpen, handleCancel, handleLogout }: LogoutModalProps) => {
//   return (
//     <div>
//       <Modal
//         centered
//         maskClosable={false}
//         open={isModalOpen}
//         onOk={handleCancel}
//         onCancel={handleCancel}
//         closable={false}
//         title={
//           <div>
//             <Text className=' text-xl flex justify-center eading-[28px]'>
//               {`${t('confirmLogout')}`}
//             </Text>
//             <div className='mt-6 flex justify-center text-[#475467] leading-[20px]'>
//               {`${t('areYouSureWantToLogout')}`}
//             </div>
//           </div>
//         }
//         footer={
//           <div className='flex flex-row justify-around  mt-[32px] w-full'>
//             <Button
//               key='back'
//               onClick={handleCancel}
//               size='large'
//               className=' text-[#344054] leading-[24px] w-full'
//             >
//               <Text>{`${t('cancel')}`}</Text>
//             </Button>

//             <Button
//               key='submit'
//               size='large'
//               onClick={handleLogout}
//               className='bg-red-500 w-full  hover:border-red-400'
//             >
//               <Text className='text-white'>{`${t('logout')}`}</Text>
//             </Button>
//           </div>
//         }
//       ></Modal>
//     </div>
//   );
// };

// export default LogoutModal;
