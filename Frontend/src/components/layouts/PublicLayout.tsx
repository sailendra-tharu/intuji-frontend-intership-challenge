import { memo } from 'react';
import { Outlet } from 'react-router-dom';

function PublicLayout() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <Outlet />
    </div>
  );
}

export default memo(PublicLayout);
