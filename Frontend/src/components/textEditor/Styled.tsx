/* eslint-disable prettier/prettier */
import styled from 'styled-components';
// import { CKEditor } from '@ckeditor/ckeditor5-react';

export const EditorWrapper = styled.div`
  font-family: Inter !important;
  background: ${({ theme }) => theme.colors.white} !important;
  box-shadow: ${({ theme }) => theme.shadows.xs} !important;
  #toolbar {
    font-family: Inter !important;
    margin: 0 !important;
    padding: 0 !important;
    gap: 16px;
    border-radius: 8px 8px 0 0 !important;
    border: 1px solid ${({ theme }) => theme.colors.gray.g3} !important;
  }
  .ql-container.ql-snow {
    min-height: 120px;
    border-radius: 0 0 8px 8px !important;
    border: 1px solid ${({ theme }) => theme.colors.gray.g3} !important;
  }
  .ql-toolbar.ql-snow {
    border-radius: 8px 8px 0 0;
  }
  .ql-editor {
    height: 39vh;
  }
  .ql-formats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 0 !important;
    border-right: 1px solid ${({ theme }) => theme.colors.gray.g3} !important;
  }

  .ql-snow.ql-toolbar > button {
    padding: 0 !important;
    float: left !important;
  }
  .ql-picker-label {
    border: none !important;
    > svg {
      display: none !important;
    }
  }
  .ql-picker-label::before {
    color: ${({ theme }) => theme.colors.gray.g6};
    font-family: Inter !important;
    font-size: 16px !important;
    font-weight: 100 !important;
    line-height: 24px !important;
    border: none !important;
    > svg {
      display: none !important;
    }
  }

  .ql-picker.ql-size {
    width: 164px !important;
  }
`;

// export const StyledCKEditor = styled(CKEditor)`
//   .ck-editor__editable {
//     height: 30vh;
//   }
// `;
