import styled from 'styled-components';
import { Switch as AntSwitch } from 'antd';

const Switch = styled(AntSwitch)`
  &.ant-switch {
    min-width: 44px;
    height: 24px;
    line-height: 24px;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.gray.g2};
    :focus {
      box-shadow: 0px 0px 0px 4px ${({ theme }) => theme.colors.primary.p7} !important;
    }
    :hover {
      background: ${({ theme }) => theme.colors.gray.g2} !important;
    }
    .ant-switch-handle {
      width: 20px;
      height: 20px;
      box-shadow: ${({ theme }) => theme.shadows.sm};
      border-radius: 50%;
      ::before {
        border-radius: 50%;
      }
    }

    &.ant-switch-checked {
      background: ${({ theme }) => theme.colors.primary.p7} !important;
      :hover {
        background: ${({ theme }) => theme.colors.primary.p7} !important;
      }
      :focus {
        background: ${({ theme }) => theme.colors.primary.p7} !important;
      }
      .ant-switch-handle {
        inset-inline-start: calc(100% - 22px);
      }
    }
  }
`;

export default Switch;
