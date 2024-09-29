import styled from 'styled-components';
import { DatePicker as AntDatePicker } from 'antd';

export const DatePicker = styled(AntDatePicker)`
  background: #ffffff;
  padding: 10px 14px !important;
  height: 44px;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  &.ant-picker {
    &:focus,
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primary.p3} !important;
      box-shadow:
        0px 0px 0px 4px rgba(158, 119, 237, 0.24),
        0px 1px 2px 0px rgba(16, 24, 40, 0.05) !important;
    }
  }
  &.ant-picker-input > input {
    font-weight: 500 !important;
    color: ${({ theme }) => theme.colors.gray.g7} !important;
    font-size: 16px !important;
    line-height: 24px !important;
    &-lg {
      line-height: 28px !important;
    }
    &::placeholder {
      font-weight: 500 !important;
      color: ${({ theme }) => theme.colors.gray.g7} !important;
      font-size: 16px !important;
      line-height: 24px !important;
      &-lg {
        line-height: 28px !important;
      }
    }
  }
`;

export const ExportDatePicker = styled(AntDatePicker)`
  background: #ffffff;
  padding: 10px 14px !important;
  height: 44px;
  /* Gray/300 */
  border: 1px solid #d0d5dd;
  /* Shadow/xs */
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;

  &.ant-picker {
    &:focus,
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primary.p3} !important;
      box-shadow:
        0px 0px 0px 4px rgba(158, 119, 237, 0.24),
        0px 1px 2px 0px rgba(16, 24, 40, 0.05) !important;
    }
  }
  .ant-picker-input {
    display: flex;
    flex-direction: row-reverse;
    gap: 8px;
  }
  &.ant-picker-input > input {
    font-weight: 500 !important;
    color: ${({ theme }) => theme.colors.gray.g7} !important;
    font-size: 16px !important;
    line-height: 24px !important;
    &-lg {
      line-height: 28px !important;
    }
    &::placeholder {
      font-weight: 500 !important;
      color: ${({ theme }) => theme.colors.gray.g7} !important;
      font-size: 16px !important;
      line-height: 24px !important;
      &-lg {
        line-height: 28px !important;
      }
    }
  }
`;
