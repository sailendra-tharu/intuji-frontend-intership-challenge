import styled from 'styled-components';
import { Select as AntSelect } from 'antd';

const Select = styled(AntSelect)`
  &.ant-select {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 44px !important;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.xs};

    .ant-select-selector {
      height: 44px !important;
      border-radius: 8px !important;
      padding: 10px 14px !important;
      width: 100% !important ;
      /* border-color: ${({ theme }) => theme.colors.primary.p3} !important; */
      &::after,
      &:hover,
      &:focus {
        /* border: 1px solid ${({ theme }) => theme.colors.primary.p3} !important; */
        box-shadow:
          0px 0px 0px 4px rgba(158, 119, 237, 0.24),
          0px 1px 2px 0px rgba(16, 24, 40, 0.05) !important;
      }
      &.ant-select-selector:hover {
        border-color: #e9d7fe !important;
      }

      .ant-select-selection-search {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ant-select-selection-item {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        color: ${({ theme }) => theme.colors.gray.g7};
      }
      .ant-select-selection-placeholder {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.gray.g5};
      }
    }
    .ant-select-selection-search-input {
      min-width: 100% !important;
      color: ${({ theme }) => theme.colors.gray.g7};
    }
    .ant-select-arrow {
      font-size: 12px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.gray.g7};
    }
  }
`;
export default Select;

export const LanguageSelect = styled(Select)`
  &.ant-select {
    .ant-select-selector {
      padding: 10px 32px !important;
    }
  }
`;
export const InsertSelect = styled(AntSelect)`
  &.ant-select {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 32px !important;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.xs};
    .ant-select-selector {
      height: 39px !important;
      border-radius: 0px !important;
      padding: 10px 14px !important;
      width: 100% !important ;
      border-color: ${({ theme }) => theme.colors.gray.g3} !important;
      &::after,
      &:hover,
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.gray.g3} !important;
        box-shadow: none !important;
      }

      .ant-select-selection-search {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ant-select-selection-item {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        color: ${({ theme }) => theme.colors.gray.g7};
      }
      .ant-select-selection-placeholder {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.gray.g5};
      }
    }
    .ant-select-selection-search-input {
      min-width: 100% !important;
      color: ${({ theme }) => theme.colors.gray.g7};
    }
    .ant-select-arrow {
      font-size: 12px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.gray.g7};
    }
  }
`;
