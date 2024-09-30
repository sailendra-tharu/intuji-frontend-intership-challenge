import { Tag } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import styled, { css } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';

interface CardTagStatusProps {
  type?: string;
}

export const NavbarWrapper = styled.div`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  padding-left: 24px;
  padding-right: 24px;
  /* background: ${({ theme }) => theme.colors.primary.p25}; */
`;
export const PageHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  padding: 20px 24px;
  border-bottom: 1px solid #eaecf0;
`;
export const PageCardWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary.p1};
  background: ${({ theme }) => theme.colors.white};
`;

export const PageContentWrapper = styled.div`
  width: 100%;
  height: 91vh;
  overflow-y: scroll;
  border-radius: 12px 0px 0px 0px;
  display: flex;
  padding: 8px 24px 24px 24px;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.p1};
  border-left: 1px solid ${({ theme }) => theme.colors.primary.p1};
  background: ${({ theme }) => theme.colors.white};
`;
export const CardTagStyled = styled(Tag)<CardTagStatusProps>`
  &.ant-tag {
    width: 43px;
    height: 24px;
    border-radius: 16px;
    display: flex;
    padding: 2px 10px 2px 8px;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.colors.primary.p7};
    border: 1.5px solid ${({ theme }) => theme.colors.primary.p2};
    background: ${({ theme }) => theme.colors.primary.p50};
    ${(props: CardTagStatusProps) =>
      props.type === 'increase' &&
      css`
        color: ${({ theme }) => theme.colors.success.s6};
        border: 1.5px solid ${({ theme }) => theme.colors.success.s6};
        background: ${({ theme }) => theme.colors.white};
      `}
    ${(props: CardTagStatusProps) =>
      props.type === 'decrease' &&
      css`
        color: ${({ theme }) => theme.colors.gray.g6};
        border: 1.5px solid ${({ theme }) => theme.colors.gray.g6};
        background: ${({ theme }) => theme.colors.white};
      `}
  }
`;
export const CardEditPencilStyled = styled.div`
  display: flex;
  width: 28px;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  align-self: stretch;
  cursor: pointer;
  border-left: 1px solid ${({ theme }) => theme.colors.gray.g3};
`;

export const PageTapWrapper = styled.div`
  width: 100%;
  .tabs-container {
    display: flex;
    flex-direction: column;
  }

  .ant-tabs-tab {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 50px;
    margin: 0 !important;
  }

  .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.colors.gray.g6};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    padding: 16px 20px;
  }
  .ant-tabs-nav-wrap {
    display: flex;
    justify-content: space-between;
  }

  .ant-tabs-nav-list {
    width: fit-content;
    display: flex;
    gap: 16px;
  }
  .ant-tabs-tab,
  .ant-tabs-top > .ant-tabs-nav {
    margin: 0px;
    width: 100%;
  }
  .ant-tabs-nav-operations {
    display: none !important;
  }
  /* 
    .ant-tabs .ant-tabs-tab {
        padding: 10px;
    } */

  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.colors.primary.p6};
  }
  .ant-tabs .ant-tabs-ink-bar {
    background-color: ${({ theme }) => theme.colors.primary.p6};
  }
`;

export const DraggerWrapper = styled(Dragger)`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid var(--Gray-200, #eaecf0);
  background: var(--Base-White, #fff);
  .css-dev-only-do-not-override-gzal6t.ant-upload.ant-upload-drag {
    width: fit-content !important;
    background: var(--Base-White, #fff) !important;
    border: none !important;
  }
`;
