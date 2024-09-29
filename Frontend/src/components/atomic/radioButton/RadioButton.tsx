import { Radio as AntRadioButton } from 'antd';
import styled, { css } from 'styled-components';

export const RadioCSS = css`
  .ant-radio {
    .ant-radio-inner {
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.gray.g3};
      border-radius: 8px;
    }
    :hover {
      .ant-radio-inner {
        background: ${({ theme }) => theme.colors.primary.p6};
        border-color: ${({ theme }) => theme.colors.primary.p6};
      }
    }
    &-checked {
      .ant-radio-inner {
        border: 1px solid ${({ theme }) => theme.colors.primary.p6};
        background: ${({ theme }) => theme.colors.primary.p6};
        &,
        &:hover {
          border: 1px solid ${({ theme }) => theme.colors.primary.p6} !important;
          background: ${({ theme }) => theme.colors.primary.p6};
        }
        &::after {
          border-color: ${({ theme }) => theme.colors.primary.p6};
          background: ${({ theme }) => theme.colors.white};
        }
      }
      + span {
        color: ${({ theme }) => theme.colors.gray.g7} !important;
      }
    }
    + span {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.gray.g6};
    }
  }
  :hover {
    .ant-radio-inner {
      background-color: ${({ theme }) => theme.colors.primary.p1} !important;
      border-color: ${({ theme }) => theme.colors.primary.p6};
      border-radius: 8px;
    }
  }
  &.ant-radio-wrapper {
    &.ant-radio-wrapper-disabled {
      .ant-radio {
        .ant-radio-input {
          cursor: not-allowed;
        }
        &,
        &:hover {
          .ant-radio-inner {
            background-color: ${({ theme }) => theme.colors.gray.g1} !important;
            border-color: ${({ theme }) => theme.colors.gray.g3};
          }
        }

        &-checked {
          .ant-radio-input {
            cursor: not-allowed;
          }
          .ant-radio-inner {
            border-color: ${({ theme }) => theme.colors.gray.g3};
            background: ${({ theme }) => theme.colors.gray.g1};
            &,
            &:hover {
              border: 1px solid ${({ theme }) => theme.colors.gray.g3} !important;
            }
            &::after {
              border-color: ${({ theme }) => theme.colors.gray.g3};
              background: ${({ theme }) => theme.colors.gray.g3};
            }
          }
        }
      }
    }
  }
`;

const Radio = styled(AntRadioButton)`
  &.ant-radio-wrapper {
    ${RadioCSS}
  }
`;

export default Radio;
