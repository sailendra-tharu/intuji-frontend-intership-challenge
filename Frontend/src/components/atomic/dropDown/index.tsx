import styled from 'styled-components';
import { Dropdown as AntDropdown } from 'antd';

const Dropdown = styled(AntDropdown)`
  &.ant-dropdown {
    width: fit-content;
    .ant-dropdown-menu {
      .ant-dropdown-menu-item {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
        color: ${({ theme }) => theme.colors.gray.g7};
        .ant-dropdown-menu-title-content {
          color: #344054 !important;
          font-size: 14px !important;
          font-style: normal !important;
          font-weight: 500 !important;
          line-height: 20px !important;
        }
        .ant-dropdown-menu-item-icon {
          margin-inline-end: 8px !important;
        }
      }
    }
  }
`;
export default Dropdown;
