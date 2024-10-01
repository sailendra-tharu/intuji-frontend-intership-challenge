import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const OutletWrapper = styled.div`
  height: 100vh;
  position: fixed;
  background: ${({ theme }) => theme.colors.primary.p25} !important;
  width: 100%;
`;

export const MenubarWrapper = styled(PerfectScrollbar)`
  min-height: 100vh;
`;
