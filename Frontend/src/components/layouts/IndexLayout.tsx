import { useEffect, memo } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useLocation, Navigate } from 'react-router-dom';

import { USER } from '~/api/enum/enum';
import { useRouteChecker } from '~/hooks';
import { useAuthStateContext } from '~/context/AuthProvider';

function IndexLayout({ children }: any) {
  const { pathname } = useLocation();
  const authState = useAuthStateContext();

  let landingPath = '';

  useEffect(() => {
    landingPath = pathname;
  }, []);

  const { isAuthPage } = useRouteChecker({
    pathname,
  });

  const BootstrappedLayout = () => {
    const isUserAuthorized = authState?.state?.tokens?.access;
    const decodedToken: any = isUserAuthorized && jwtDecode(isUserAuthorized);
    const admin = decodedToken?.authorities?.[0];
    const adminAuth = admin == USER.ADMIN || admin == USER.SUPERADMIN;

    const redirectToLogin = !isAuthPage && !adminAuth;
    // redirect to login page if current is not login page and user not authorized
    if (redirectToLogin) {
      return <Navigate to='auth/login' state={{ from: pathname }} replace />;
    }
    // redirect to main dashboard when user on login page and authorized
    if (isAuthPage && adminAuth) {
      const redirectPath = landingPath;
      // landingPath = '';
      return <Navigate to={redirectPath} state={{ from: pathname }} replace />;
    }
    // in other case render previously set layout

    return children;
  };

  return BootstrappedLayout();
}

export default memo(IndexLayout);
