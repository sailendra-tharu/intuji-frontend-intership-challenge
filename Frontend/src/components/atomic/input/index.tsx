import styled, { css } from 'styled-components';
import { Input as AntInput, Select as AntSelect, InputNumber } from 'antd';

const inputCss = css`
  background: #ffffff;
  padding: 10px 14px !important;
  height: 44px;
  /* Gray/300 */
  border: 1px solid #d0d5dd;
  /* Shadow/xs */
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  &.ant-input {
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary.p3};
    }
  }
  &.ant-input,
  &.ant-input-affix-wrapper {
    color: ${({ theme }) => theme.colors.gray.g9} !important;
    font-size: 16px;
    line-height: 24px;
    &-lg {
      line-height: 28px;
    }

    &::placeholder,
    ::placeholder {
      font-size: 16px !important;
      color: ${({ theme }) => theme.colors.gray.g5} !important;
    }
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.primary.p3} !important;
      box-shadow:
        0px 0px 0px 4px rgba(158, 119, 237, 0.24),
        0px 1px 2px 0px rgba(16, 24, 40, 0.05) !important;
    }
    &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
      /* border: 1px solid ${({ theme }) => theme.colors.primary.p3} !important; */
      box-shadow:
        0px 0px 0px 4px rgba(158, 119, 237, 0.24),
        0px 1px 2px 0px rgba(16, 24, 40, 0.05) !important;
    }
  }
  .ant-input.ant-input-disabled.css-dev-only-do-not-override-gzal6t {
    color: #344054;
  }
`;

export const StyledSelect = styled(AntSelect)`
  &.ant-select {
    margin-top: 8px;
    text-indent: 10px;
    border-radius: 8px !important;
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    .ant-select-arrow {
      width: 20px !important;
      height: 20px !important;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .anticon > svg {
        width: 12px !important;
        height: 12px !important;
        fill: #667085 !important;
      }
    }

    .ant-select-selector {
      min-height: 44px;
      width: 100% !important;
      padding: 8px 5px !important;
      width: 100% !important ;
      font-size: 16px !important;
      border-radius: 8px !important;
      .ant-select-selection-search {
        display: flex;
        align-items: center;
      }
      .ant-select-selection-placeholder {
        display: flex;
        align-items: center;
        font-size: 16px !important;
        font-weight: 400 !important;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.gray.g5};
      }
      .ant-select-selection-item {
        display: flex;
        align-items: center;
      }
    }
    .ant-select-selection-search-input {
      min-width: 100% !important;
    }
  }
`;

const Input = styled(AntInput)`
  ${inputCss}
`;

export const NumberInput = styled(InputNumber)`
  &.ant-input-number-affix-wrapper {
    height: 44px !important;
    width: 100%;
    max-width: 145px;
    box-sizing: border-box;
  }

  .ant-input-number-input {
    margin-top: 6px;
  }

  &.ant-input-number-affix-wrapper .ant-input-number-handler-wrap {
    display: none !important;
  }

  &.ant-input-number:hover .ant-input-number-handler-wrap {
    display: none !important;
  }
  .ant-input-number .ant-input-number-input:placeholder-shown {
    padding-top: 10px !important;
  }

  &.ant-input-number-affix-wrapper input.ant-input-number-input {
    padding-top: 9px !important;
  }

  @media (max-width: 600px) {
    &.ant-input-number-affix-wrapper {
      height: 36px !important;
      width: 100%;
      max-width: 120px;
    }
  }
`;

export const TextAreaInput = styled(AntInput.TextArea)`
  ${inputCss}
  &.ant-input {
    min-height: 134px !important;
  }
`;

export const PasswordInput = styled(AntInput.Password)`
  ${inputCss}
`;

export default Input;
