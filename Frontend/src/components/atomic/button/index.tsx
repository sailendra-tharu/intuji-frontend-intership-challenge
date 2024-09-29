import styled from 'styled-components';
import { Button as AntButton } from 'antd';

const Button = styled(AntButton)`
  &.ant-btn {
    .css-dev-only-do-not-override-gzal6t.ant-btn-default:not(:disabled):not(
        .ant-btn-disabled
      ):hover {
      border-color: ${({ theme }) => theme.colors.primary.p7} !important;
    }
    padding: 0px 16px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.primary.p2};
    gap: 8px;
    > svg {
      width: 20px;
      height: 20px;
    }
    > span {
      font-weight: 600;
      margin: 0 !important;
    }
    &.ant-btn-icon-only {
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.ant-btn {
      &-primary,
      &-default,
      &-dashed {
        box-shadow: ${({ theme }) => theme.shadows.xs};
      }
    }
    /* primary btn */
    &.ant-btn-primary {
      background: ${({ theme }) => theme.colors.primary.p6};
      > span,
      > svg {
        color: ${({ theme }) => theme.colors.white};
      }
      &:not(:disabled):hover {
        background: ${({ theme }) => theme.colors.primary.p7};
      }
      &:disabled {
        border-color: ${({ theme }) => theme.colors.primary.p2};
        background: ${({ theme }) => theme.colors.primary.p2};
      }
      &.ant-btn-dangerous {
        :not(:disabled):hover {
          background: ${({ theme }) => theme.colors.error.e7};
        }
      }
    }

    /* default btn */
    &.ant-btn-default {
      border-color: ${({ theme }) => theme.colors.gray.g3};
      > span,
      > svg {
        color: ${({ theme }) => theme.colors.gray.g8};
      }
      :not(:disabled):hover {
        border-color: ${({ theme }) => theme.colors.gray.g3} !important;
        background: ${({ theme }) => theme.colors.gray.g50};
      }
      :disabled {
        > span,
        > svg {
          color: ${({ theme }) => theme.colors.gray.g3};
        }
        border-color: ${({ theme }) => theme.colors.gray.g2};
        background: ${({ theme }) => theme.colors.white};
      }
      &.ant-btn-dangerous {
        border-color: ${({ theme }) => theme.colors.error.e3};
        > span,
        > svg {
          color: ${({ theme }) => theme.colors.error.e8};
        }
        :not(:disabled):hover {
          border-color: ${({ theme }) => theme.colors.error.e3};
          background: ${({ theme }) => theme.colors.error.e50};
        }
      }
    }

    /* text btn */
    &.ant-btn-text {
      padding: 0 !important;
      border: white !important;
      &.ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover {
        background: none !important;
      }
    }

    /* sizes */
    &.ant-btn-sm {
      padding: 0px 14px;
      height: 36px;
      &.ant-btn-icon-only {
        width: 36px;
      }
    }
    &.ant-btn-lg {
      padding: 0px 18px;
      height: 44px;
      &.ant-btn-icon-only {
        width: 44px;
      }
    }
  }
`;

export default Button;
