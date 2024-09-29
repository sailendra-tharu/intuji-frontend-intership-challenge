import styled from 'styled-components';
import { Modal as AntModal } from 'antd';

export const Modal = styled(AntModal)`
  &.ant-modal {
    background: ${({ theme }) => theme.colors.gray.g25};
    border: 1px solid ${({ theme }) => theme.colors.gray.g3};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-radius: 12px;
    .ant-modal-content {
      box-shadow: none !important;
    }
  }
`;
