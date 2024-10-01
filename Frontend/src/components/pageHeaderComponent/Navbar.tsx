// import { Popover } from 'antd';
// import { jwtDecode } from 'jwt-decode';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { useLayoutEffect, useState } from 'react';

// import { APP, PROFILE } from '~/config/path';
// import { getTokens } from '~/utilities/getTokens';
// import { useLocale } from '~/context/LocalProvider';
// import { useGetProfile } from '~/handlers/profile/profile';

// import { NavbarWrapper } from './Styled';
// import SettingContent from './SettingContent';

// import { Button, Text } from '../atomic';
// import UserIcon from '../icons/UserIcon';
// import { LanguageSelect } from '../atomic/select';
// import { DownIcon, GlobeIcon, SettingIcon } from '../icons';

// interface NavbarProps {
//   title?: string;
//   backIcon?: React.ReactNode;
// }

// const Navbar = ({ title, backIcon }: NavbarProps) => {
//   const { i18n } = useTranslation();
//   const { locale, setLocale } = useLocale();

//   i18n.on('languageChanged', () => setLocale(locale));
//   const changeLanguage = (value: string) => {
//     i18n.changeLanguage(value);
//     setLocale(value);
//     localStorage.setItem('locale', value);
//   };
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const token = getTokens();
//   const decoded = token && jwtDecode(token?.access);
//   const id = decoded.user.id;
//   const { data } = useGetProfile(id);
//   const [open, setOpen] = useState(false);
//   const [icon, showIcon] = useState(false);

//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/${APP}/${PROFILE}`);
//   };
//   const handleOpenChange = (newOpen: boolean) => {
//     setOpen(newOpen);
//     showIcon(true);
//   };

//   const StyledPopOver = styled(Popover)`
//     .ant-popover {
//       z-index: 99999;
//       width: 285px !important;
//     }
//     .ant-popover-inner {
//       // padding: 4px 0px;
//     }
//   `;

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
//     <NavbarWrapper>
//       <div className='flex gap-[18px] items-center'>
//         {backIcon}
//         <Text type='display' size='xs' weight='medium' color='#000'>
//           {title}
//         </Text>
//       </div>
//       <div className='flex  gap-4 justify-center items-center'>
//         <div className='relative'>
//           <GlobeIcon className='absolute z-10 bottom-[13px] left-2.5' />
//           <LanguageSelect
//             style={{ height: 38, width: 118 }}
//             value={locale}
//             onChange={(value: any) => changeLanguage(value)}
//             options={[
//               {
//                 value: 'en-US',
//                 label: (
//                   <Text size='xs' weight='medium' className='text-[#475467]'>
//                     English
//                   </Text>
//                 ),
//               },
//               {
//                 value: 'nl',
//                 label: (
//                   <Text size='xs' weight='medium' className='text-[#475467]'>
//                     Dutch
//                   </Text>
//                 ),
//               },
//             ]}
//             suffixIcon={<DownIcon className='w-4 h-4' />}
//           />
//         </div>
//         <StyledPopOver
//           placement='bottomRight'
//           content={<SettingContent />}
//           open={open}
//           trigger='click'
//           getPopupContainer={(triggerNode) => triggerNode}
//           arrow={false}
//           onOpenChange={handleOpenChange}
//         >
//           <Button type='text'>
//             <SettingIcon className='cursor-pointer' />
//           </Button>
//         </StyledPopOver>
//         <div
//           aria-hidden='true'
//           role='button'
//           className='object-cover  w-[30px]'
//           onClick={handleClick}
//         >
//           {imageUrl ? (
//             <img
//               src={imageUrl}
//               alt='Not found'
//               className={` w-[24px] h-[24px] rounded-full object-fill`}
//             />
//           ) : (
//             <UserIcon className='animate-pulse w-[30px] h-auto rounded-xl' />
//           )}
//         </div>
//       </div>
//     </NavbarWrapper>
//   );
// };

// export default Navbar;
