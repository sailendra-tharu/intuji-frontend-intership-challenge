// import { ReactNode } from 'react';
// import { useTranslation } from 'react-i18next';

// import { SearchInputStyled } from './Style';

// import { Switch, Text } from '../atomic';
// import SearchInputIcon from '../icons/SearchInputIcon';

// interface PropsInterface {
//   actionButtons?: ReactNode[];
//   enableSearch?: boolean;
//   enableSwitch?: boolean;
//   enableBackArrow?: boolean;
//   subTitle?: string;
//   subTitleIcon?: ReactNode;
//   setSearchQuery?: (e: string) => void;
// }

// export const DataTableHeader = (props: PropsInterface) => {
//   const {
//     actionButtons = [],
//     enableSearch = false,
//     enableSwitch = false,
//     subTitle,
//     subTitleIcon = false,
//     setSearchQuery,
//   } = props;
//   const { t } = useTranslation();

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (setSearchQuery) {
//       setSearchQuery(e.target.value);
//     }
//   };

//   return (
//     <div className=' w-full flex justify-between  items-center mb-3 '>
//       {enableSearch && (
//         <SearchInputStyled
//           size='large'
//           placeholder={`${t('search')}`}
//           className='w-[300px] flex '
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
//           prefix={<SearchInputIcon />}
//         />
//       )}
//       {enableSwitch && (
//         <div className='w-[340px] flex justify-center items-center gap-3'>
//           <Text type='text' size='sm' weight='medium' color='#344054'>
//             {t('groupAllLineByDocument')}
//           </Text>
//           <Switch />
//         </div>
//       )}
//       {subTitle && (
//         <div className='w-[300px] flex items-center gap-2 ml-1'>
//           {subTitleIcon}
//           <Text type='text' size='sm' weight='medium' color='#344054'>
//             {subTitle}
//           </Text>
//         </div>
//       )}
//       {actionButtons && actionButtons?.map((button) => button)}
//     </div>
//   );
// };
