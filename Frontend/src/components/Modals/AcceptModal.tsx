// import { Button } from 'antd';

// import { Modal } from './Styled';

// import { Text } from '../atomic';

// interface AcceptModalProps {
//   title?: string;
//   isModalOpen: boolean;
//   handleCancel?: () => void;
//   handleAccept?: any;
//   loading?: boolean;
//   initials?: any;
//   id?: number;
// }
// const AcceptModal = ({
//   title,
//   isModalOpen,
//   handleCancel,
//   handleAccept,
//   loading,
//   initials,
//   id,
// }: AcceptModalProps) => {
//   const acceptHandler = () => {
//     handleAccept(id);
//   };
//   return (
//     <Modal
//       centered
//       style={{ maxWidth: '400px' }}
//       title={
//         <div className='flex flex-col gap-1'>
//           <div className='flex flex-col gap-4'>
//             <div className='flex flex-col gap-1'>
//               <Text weight='semibold' size='lg' type='text'>
//                 Accept Client
//               </Text>
//               <Text type='text' size='sm' weight='regular' className='text-[#475467]'>
//                 Are you sure you want to add this {title}?
//               </Text>
//             </div>
//           </div>
//         </div>
//       }
//       open={isModalOpen}
//       onOk={handleCancel}
//       destroyOnClose={true}
//       onCancel={handleCancel}
//       footer={
//         <div className='flex flex-row gap-3 mt-8 w-full'>
//           <Button size='large' key='back' onClick={handleCancel} style={{ width: '100%' }}>
//             <Text weight='semibold' size='md' type='text' color='#344054'>
//               Cancel
//             </Text>
//           </Button>
//           <Button
//             key='submit'
//             size='large'
//             onClick={handleAccept}
//             disabled={loading}
//             loading={loading}
//             type='primary'
//             className='w-full bg-[#6941C6]'
//             // style={{
//             //     color: '#FFF',
//             //     background: '#F04438',
//             //     border: '1px solid #F04438',
//             //     width: '100%',
//             // }}
//           >
//             <Text weight='semibold' size='md' type='text' color='#FFF'>
//               Accept
//             </Text>
//           </Button>
//         </div>
//       }
//     ></Modal>
//   );
// };

// export default AcceptModal;
