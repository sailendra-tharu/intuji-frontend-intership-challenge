import styled from 'styled-components';
import { Input, Pagination, Table, Tag } from 'antd';

export const TableStyled = styled(Table)`
  &.ant-table-wrapper {
    position: relative;
    .ant-table-title {
      padding: 0px !important;
      top: 0;
      border: none !important;
      border-radius: none !important;
      box-shadow: none !important;
      background: ${({ theme }) => theme.colors.white} !important;
      z-index: 1;
    }
    .ant-table-expanded-row > .ant-table-cell {
      margin: 0px !important;
      padding: 0px !important;
    }
    .ant-table-expanded-row > .ant-table-cell > .ant-table-wrapper > div > div > div {
      margin: 0 20px 20px 20px !important;
    }
    .ant-table-expanded-row > .ant-table-cell > .ant-table-wrapper > div > div > div > div > div {
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.colors.gray.g2};
      background: ${({ theme }) => theme.colors.white};
      box-shadow: ${({ theme }) => theme.shadows.sm};
    }
    .ant-table-expanded-row > .ant-table-cell-row-hover {
      cursor: alias !important;
    }
    .ant-table-expanded-row
      > .ant-table-cell
      > .ant-table-wrapper
      > div
      > div
      > div
      > div
      > div
      > table
      > thead
      > tr
      > th {
      background-color: ${({ theme }) => theme.colors.primary.p1} !important;
    }
    .ant-table-container {
      /* height: 60.5vh; */
      border-radius: 12px 12px 0 0 !important;
      border-left: 1px solid ${({ theme }) => theme.colors.gray.g2} !important;
      border-right: 1px solid ${({ theme }) => theme.colors.gray.g2} !important;
      border-top: 1px solid ${({ theme }) => theme.colors.gray.g2} !important;
      background: ${({ theme }) => theme.colors.white} !important;

      /* Shadows/shadow-xs */
      box-shadow: ${({ theme }) => theme.shadows.xs};
    }
    .ant-table-body::-webkit-scrollbar {
      width: 8px;
    }

    .ant-table-body::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    .ant-table-body::-webkit-scrollbar-thumb {
      background-color: #d0d0d0;
      border-radius: 4px;
    }

    .ant-table-body::-webkit-scrollbar-thumb:hover {
      background-color: #787878;
    }
    .ant-table-tbody {
      overflow-y: auto;
      max-height: calc(80vh - 216px);
      tr {
        border: 1px solid ${({ theme }) => theme.colors.gray.g2} !important;
        .ant-table-cell {
          padding: 18.5px 1.25rem !important;
        }
        .ant-table-selection-column {
          padding: 8px !important;
        }
        td {
          .ant-checkbox-wrapper {
            padding-left: 8px;
          }
        }
      }
    }
    .ant-table-thead {
      background: white;
      z-index: 1;
      tr {
        th {
          color: ${({ theme }) => theme.colors.gray.g7};
          font-weight: 600;
          font-size: 12px;
          padding: 11px 16px;
          .ant-table-selection {
            padding-left: 8px;
          }
        }
        th::before {
          width: 0 !important;
        }
      }
    }
    .ant-table-tbody > tr > td {
      padding: 1.625rem 1.25rem;
    }
    &.ant-table-row-selected {
      background: #fff !important;
    }
    .ant-table-cell-row-hover {
      background: #fff !important;
      :hover {
        background: #fff !important;
      }
    }
  }
  .ant-table-footer {
    margin-top: 0 !important;
    background: #f9fafb !important;
    border-left: 1px solid ${({ theme }) => theme.colors.gray.g2};
    border-right: 1px solid ${({ theme }) => theme.colors.gray.g2};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.g2};
    border-radius: 12px;
    max-height: auto !important;
    display: flex;
    align-items: center;
  }
  .ant-table-pagination.ant-pagination {
    display: flex;
    justify-content: center;
    padding: 14px 24px;
    margin: 0 !important;
    width: 100%;
    position: relative;
    border-radius: 0 0 12px 12px;
    grid-template-columns: repeat(auto-fit, minmax(20px, 2fr)) !important;
    border-right: 1px solid ${({ theme }) => theme.colors.gray.g2};
    border-left: 1px solid ${({ theme }) => theme.colors.gray.g2};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.g2};
    box-shadow: ${({ theme }) => theme.shadows.xs};
    .ant-pagination-prev {
      position: absolute;
      bottom: 11px;
      right: 140px;
      margin: 0;
      padding: 8px 0 !important;
    }
    li:not(:first-child):not(:last-child) {
      justify-content: center !important;
    }
    .ant-pagination-next {
      position: absolute;
      right: 24px;
      bottom: 11px;
    }
    .ant-pagination-options {
      position: absolute;
      left: 0;
      bottom: 15px;
      .ant-select {
        .ant-select-selector {
          cursor: pointer !important;
        }
      }
    }
    &.ant-pagination::after {
      display: none;
      content: none !important;
    }
    .ant-pagination-prev,
    .ant-pagination-next,
    .ant-select-selector {
      height: 36px;
      display: flex;
      padding: 8px 12px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      border-radius: 8px;
      border: 1px solid var(--Gray-300, #d0d5dd) !important;
      background: var(--Base-White, #fff) !important;
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05) !important;
    }
    .ant-select-selection-search {
      display: none !important;
    }
    &.ant-select.ant-pagination-options-size-changer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6px;
    }
    .ant-select-arrow {
      width: 20px;
      height: 20px;
    }
    .ant-select-selector {
      display: flex;
      justify-items: center;
      align-items: center;
    }
    .ant-select-selection-item {
      color: var(--Gray-600, #475467);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }

    .ant-pagination-item {
      display: flex;
      width: 40px;
      padding: 8px;
      justify-self: center !important;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      align-self: stretch;
      border-radius: 8px;
    }
  }
  .ant-table-column-sorter .ant-table-column-sorter-inner .anticon {
    svg {
      display: none;
    }
  }
  .ant-checkbox {
    .ant-checkbox-inner {
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.gray.g3};
      border-radius: 4px;
    }
    :hover {
      .ant-checkbox-inner {
        background: ${({ theme }) => theme.colors.primary.p1};
      }
    }

    &-checked {
      ::after {
        border-width: 2px;
      }

      .ant-checkbox-inner {
        border: 1px solid ${({ theme }) => theme.colors.primary.p6};
        &,
        &:hover {
          background: ${({ theme }) => theme.colors.primary.p1};
        }
        &::after {
          border-color: #7951cd;
        }
      }
    }
    &-indeterminate {
      .ant-checkbox-inner {
        border: 1px solid ${({ theme }) => theme.colors.primary.p6};
        background: ${({ theme }) => theme.colors.primary.p1};
        &::after {
          height: 8px;
          border-radius: 1px;
          background: ${({ theme }) => theme.colors.primary.p5} !important;
        }
      }
    }
  }
  :not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background: 0;
    border-color: #7951cd;
  }
`;

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.g2};
`;
export const SearchInputStyled = styled(Input)`
  &.ant-input-affix-wrapper-lg {
    height: 44px;
    width: 300px !important;
    padding: 8px 16px;
    border-radius: 8px;
  }
  &.ant-input-affix-wrapper {
    ::placeholder {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.gray.g5};
    }
  }
`;
export const GroupTagStyled = styled(Tag)`
  &.ant-tag {
    color: ${({ theme }) => theme.colors.primary.p5};
    padding: 2px 0.5rem;
    background: #eef4ff;
    border: 1px solid #eef4ff;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export const CostumPagination = styled(Pagination)`
  width: 100%;
  position: relative;
  .ant-pagination-prev {
    position: absolute;
    right: 124px;
    bottom: 6px;
    .ant-btn {
      padding: 8px 12px;
      width: 110px;
    }
  }
  .ant-pagination-next {
    position: absolute;
    right: 0;
    bottom: 6px;
    .ant-btn {
      padding: 8px 12px;
      width: 110px;
    }
  }
`;
