// import { jwtDecode } from 'jwt-decode';
// import { useLayoutEffect, useState } from 'react';

// import { getTokens } from '~/utilities/getTokens';
// import { useDisclosure } from '~/hooks/useDisclosure';
// import { useGetProfile } from '~/handlers/profile/profile';

// import LogoutModal from './LogoutModal';

// import { Text } from '../atomic';
// import { LogoutIcon } from '../icons';

// import image from '../../assets/Image.svg';

// import UserIcon from '../icons/UserIcon';

// const LogoutBox = () => {
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const token = getTokens();
//   const accessToken: any = token?.access;
//   const {
//     user: { username: userName },
//     authorities: [role] = [],
//   } = (accessToken && jwtDecode(token?.access)) || {};
//   const decoded = token && jwtDecode(token?.access);
//   const id = decoded.user.id;
//   const { data } = useGetProfile(id);

//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const handleLogout = () => {
//     localStorage.removeItem('_tokens');
//     window.location.reload();
//   };

//   useLayoutEffect(() => {
//     {
//       data?.path &&
//         fetch(data?.path, {
//           headers: {
//             Authorization: `Bearer ${token.access}`,
//           },
//         })
//           .then((response) => {
//             if (response.ok) {
//               return response.blob();
//             }
//             throw new Error('Network response was not ok.');
//           })
//           .then((blob) => {
//             const objectURL = URL.createObjectURL(blob);
//             setImageUrl(objectURL);
//           });
//     }
//   }, [data?.path, token.access]);

//   return (
//     <div>
//       <div className='flex items-center gap-3 mt-6 relative'>
//         <div className='flex items-center w-[60px] h-[60px]'>
//           {imageUrl ? (
//             <img
//               src={imageUrl}
//               alt='Not found'
//               className={` w-[40px] h-[40px] rounded-full object-fill`}
//             />
//           ) : (
//             <UserIcon className='animate-pulse w-[30px] h-auto rounded-xl' />
//           )}
//         </div>
//         <div className='w-[10vw]'>
//           <Text
//             type='text'
//             size='sm'
//             weight='semibold'
//             color='#344054'
//             className='truncate hover:overflow-visible'
//           >
//             {data?.namesPojo?.firstName} {data?.namesPojo?.lastName}
//           </Text>
//           <Text type='text' size='sm' color='#344054'>
//             {role}
//           </Text>
//         </div>
//         <LogoutIcon className={'cursor-pointer'} color='#344054' onClick={onOpen} />
//       </div>
//       <LogoutModal handleLogout={handleLogout} isModalOpen={isOpen} handleCancel={onClose} />
//     </div>
//   );
// };

// export default LogoutBox;
