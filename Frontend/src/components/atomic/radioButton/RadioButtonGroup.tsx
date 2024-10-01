import { Radio } from 'antd';
import styled from 'styled-components';

import { RadioCSS } from './RadioButton';

const AntRadioButtonGroup = Radio.Group;
const RadioButtonGroup = styled(AntRadioButtonGroup)`
  &.ant-radio-group {
    .ant-radio-wrapper {
      ${RadioCSS}
    }
  }
`;

export const VerticalRadioGroup = styled(Radio.Group)`
  &.ant-radio-group {
    display: flex !important;
    flex-direction: row !important;
    .ant-radio-button-wrapper {
      border-color: ${({ theme }) => theme.colors.gray.g3} !important;
      ::before {
        background-color: ${({ theme }) => theme.colors.gray.g3} !important;
      }
      span {
        padding: 10px 16px;
        font-weight: 600;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray.g7};
      }
    }
    .ant-radio-button-wrapper-checked {
      background: ${({ theme }) => theme.colors.gray.g1} !important;
      border-color: ${({ theme }) => theme.colors.gray.g3} !important;
      span {
        color: ${({ theme }) => theme.colors.gray.g8} !important;
      }
    }
  }
`;

export default RadioButtonGroup;
