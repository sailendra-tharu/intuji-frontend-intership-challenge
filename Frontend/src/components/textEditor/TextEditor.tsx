/* eslint-disable prettier/prettier */
import '/src/ckeditor.css';
import { useTranslation } from 'react-i18next';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { CONFIG } from '~/config';
import { getTokens } from '~/utilities/getTokens';

import { StyledCKEditor } from './Styled';

export const TextEditor = ({ onChange, value, fileType }: any) => {
  const { t } = useTranslation();
  const token = getTokens();

  const API_URL = CONFIG.RESOURCES_URI;
  const UPLOAD_ENDPOINT = 'file/public';

  function uploadAdapter(loader: any) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file: any) => {
            body.append('file', file);
            body.append('fileType', `${fileType}`);
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
              headers: {
                Authorization: `Bearer ${token.access}`,
              },
              method: 'post',
              body: body,
            })
              .then((res: any) => res.json())
              .then((res) => {
                resolve({ default: `${res?.data?.url}` });
              })
              .catch((err: any) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor: any) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <StyledCKEditor
      config={{
        extraPlugins: [uploadPlugin],
        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            {
              model: 'heading1',
              view: {
                name: 'h1',
                classes: 'heading1',
              },
              title: 'Heading 1 ',
              class: 'ck-heading_heading1',
            },
            {
              model: 'heading2',
              view: {
                name: 'h2',
                classes: 'heading2',
              },
              title: 'Heading 2 ',
              class: 'ck-heading_heading2',
            },
            {
              model: 'heading3',
              view: {
                name: 'h3',
                classes: 'heading3',
              },
              title: 'Heading 3 ',
              class: 'ck-heading_heading3',
            },
            {
              model: 'heading4',
              view: {
                name: 'h4',
                classes: 'heading4',
              },
              title: 'Heading 4 ',
              class: 'ck-heading_heading4',
            },
            {
              model: 'heading5',
              view: {
                name: 'h5',
                classes: 'heading5',
              },
              title: 'Heading 5 ',
              class: 'ck-heading_heading5',
            },
            {
              model: 'heading6',
              view: {
                name: 'h6',
                classes: 'heading6',
              },
              title: 'Heading 6 ',
              class: 'ck-heading_heading6',
            },
          ],
        },

        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            '|',
            'link',
            'uploadImage',
            '|',
            'undo',
            'redo',
          ],
        },
        placeholder: t('typeTheContentHere!'),
        language: 'en',
        licenseKey: '',
      }}
      editor={ClassicEditor}
      data={value}
      onChange={onChange}
      onReady={(editor: any) => {
        editor.execute('heading', { value: 'paragraph' });
      }}
    />
  );
};

export default TextEditor;
