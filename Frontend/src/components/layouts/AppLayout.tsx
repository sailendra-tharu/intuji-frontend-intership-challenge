// import { memo } from 'react';
// import { Outlet } from 'react-router-dom';

// import { ErrorFallback } from '~/pages/ErrorFallback';
// import { ErrorBoundary } from '~/components/error-boundary';

// import { OutletWrapper } from './Styled';

// import Sidebar from '../sidebar/Sidebar';

// const AppLayout = () => {
//   return (
//     <div className='min-h-screen w-screen flex overflow-hidden '>
//       <div className='w-[280px]'>
//         <Sidebar />
//       </div>
//       <div className='w-[calc(100%-280px)] '>
//         <OutletWrapper className='w-[calc(100%-280px)] '>
//           <ErrorBoundary
//             FallbackComponent={ErrorFallback}
//             onError={() => 'ss'}
//             onReset={() => window.location.replace(window.location.href)}
//           >
//             <Outlet />
//           </ErrorBoundary>
//         </OutletWrapper>
//       </div>
//     </div>
//   );
// };

// export default memo(AppLayout);
