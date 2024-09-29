import { Menu, Modal } from 'antd';
import styled from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const MainMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #fcfaff;
  padding: 16px 20px;
  height: 100vh;
  position: fixed;
  width: 280px;
`;

export const SidebarContent = styled(PerfectScrollbar)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 79vh;
  padding: 0;
`;

export const StyledMenu = styled(Menu)`
  &.ant-menu {
    &,
    & * {
      border: none !important;
      background: transparent;
    }
    .ant-menu-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 12px;
      margin: 0;
      padding: 16px 16px !important;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      width: 100%;
      color: ${({ theme }) => theme.colors.gray.g6};
      border-radius: 6px;

      &:hover {
        background: ${({ theme }) => theme.colors.primary.p6} !important;
        color: ${({ theme }) => theme.colors.gray.g25} !important;
      }
      &-selected {
        .ant-menu-title-content > div {
          color: ${({ theme }) => theme.colors.white} !important;
          :hover {
            background: ${({ theme }) => theme.colors.primary.p6};
            color: ${({ theme }) => theme.colors.white} !important;
          }
        }
        background: ${({ theme }) => theme.colors.primary.p6};
        color: ${({ theme }) => theme.colors.white} !important;
        &:hover,
        &:focus,
        &:active {
          background: ${({ theme }) => theme.colors.primary.p6};
          color: ${({ theme }) => theme.colors.white} !important;
        }
      }

      + .ant-menu-item {
        margin-top: 4px;
      }
      > svg.ant-menu-item-icon {
        width: 24px;
        height: 24px;
        + span {
          margin-inline-start: 0px;
        }
      }
    }
    .ant-menu-submenu {
      margin: 0;
      padding: 0px !important;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      width: 100%;
      color: ${({ theme }) => theme.colors.primary.p6};
      border-radius: 6px;

      .ant-menu-submenu-title {
        width: 100%;
        padding: 8px 0px 8px 12px !important;
        color: ${({ theme }) => theme.colors.primary.p2};
        margin-inline: 0px;
        &:hover {
          color: ${({ theme }) => theme.colors.primary.p6};
          background: ${({ theme }) => theme.colors.white} !important;
        }
      }

      > svg.ant-menu-item-icon {
        width: 24px;
        height: 24px;
        + span {
          margin-inline-start: 0px;
        }
      }
    }
    .ant-menu-submenu-active:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected)
      .ant-menu-submenu-title {
      color: #fcfcfd !important;
      background: #57b5e5 !important;
      opacity: 0.75;
    }
    .ant-menu-submenu-selected .ant-menu-submenu-title {
      color: ${({ theme }) => theme.colors.primary.p6};
      background: #ffffff !important;
    }

    .ant-menu.ant-menu-sub {
      .ant-menu-item {
        .ant-menu-title-content {
          font-weight: 400;
        }
      }
      .ant-menu-item-selected {
        color: #ffffff;
        background: none !important;
        .ant-menu-title-content {
          font-weight: 700;
        }
      }
    }

    .ant-menu-sub {
      .ant-menu-item-active {
        background: none !important;
      }
    }

    &.ant-menu-submenu-inline {
      .ant-menu-submenu div {
        padding-left: 0;
      }
    }
    &.ant-menu-light.ant-menu-inline .ant-menu-sub.ant-menu-inline {
      padding-left: 50px;
    }

    &.ant-menu-light:not(.ant-menu-horizontal) {
      .ant-menu-item:not(.ant-menu-item-selected):hover {
        color: ${({ theme }) => theme.colors.gray.g25};
        background: ${({ theme }) => theme.colors.primary.p9};
        opacity: 0.75;
      }
    }
  }
`;

export const ModalStyled = styled(Modal)`
  background-color: #667085;
  &.ant-modal {
    border-radius: 12px;
    padding-bottom: 0px;
    box-shadow: 0px 8px 8px -4px rgb(16 24 40 / 3%) !important;

    .ant-modal-content {
      box-shadow: none !important;
      max-width: 700px !important;
    }
    .ant-modal-body > form {
      padding: 12px;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.gray.g50};
      max-height: 80dvh;
      overflow-y: scroll;
    }
    ::-webkit-scrollbar {
      width: 2px !important;
    }
  }
`;
