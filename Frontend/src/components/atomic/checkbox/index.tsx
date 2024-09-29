import { Checkbox } from 'antd';
import styled from 'styled-components';

const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox:hover .ant-checkbox-inner {
    border: 1px solid ${({ theme }) => theme.colors.primary.p6} !important;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    border: 1px solid ${({ theme }) => theme.colors.primary.p6};
    background: ${({ theme }) => theme.colors.primary.p50} !important;
  }
  .ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: ${({ theme }) => theme.colors.primary.p6};
  }

  .ant-checkbox-indeterminate {
    .ant-checkbox-inner {
      border: 1px solid ${({ theme }) => theme.colors.primary.p50};
      background-color: ${({ theme }) => theme.colors.primary.p50};
    }
    .ant-checkbox-inner:after {
      width: 10px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary.p6};
      border-radius: 8px;
    }
  }
`;
export default StyledCheckbox;
