// import { Button } from 'antd';
// import { useTranslation } from 'react-i18next';

// import { Modal } from './Styled';

// import { Text } from '../atomic';
// import { DeleteModalIcon } from '../icons';

// interface DeleteModalProps {
//   title?: string;
//   isModalOpen: boolean;
//   handleCancel?: () => void;
//   handleDelete?: any;
//   loading?: boolean;
//   id?: number | null;
// }
// const DeleteModal = ({
//   title,
//   isModalOpen,
//   handleCancel,
//   handleDelete,
//   loading,
//   id,
// }: DeleteModalProps) => {
//   const { t } = useTranslation();
//   const deleteHandler = () => {
//     handleDelete(id);
//   };
//   return (
//     <Modal
//       centered
//       style={{ maxWidth: '400px' }}
//       title={
//         <div className='flex flex-col gap-1'>
//           <div className='flex flex-col gap-4'>
//             <DeleteModalIcon />
//             <div className='flex flex-col gap-1'>
//               <Text weight='semibold' size='lg' type='text'>
//                 {`${t('delete')}`}
//               </Text>
//               <Text type='text' size='sm' weight='regular' className='text-[#475467]'>
//                 {`${t('areYouSureYouWantToDeleteThis')} ${title} ${t('thisActionCannotBeUndo')}`}
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
//               {`${t('cancel')}`}
//             </Text>
//           </Button>
//           <Button
//             key='submit'
//             size='large'
//             onClick={deleteHandler}
//             disabled={loading}
//             loading={loading}
//             style={{
//               color: '#FFF',
//               background: '#F04438',
//               border: '1px solid #F04438',
//               width: '100%',
//             }}
//           >
//             <Text weight='semibold' size='md' type='text' color='#FFF'>
//               {`${t('delete')}`}
//             </Text>
//           </Button>
//         </div>
//       }
//     ></Modal>
//   );
// };

// export default DeleteModal;
