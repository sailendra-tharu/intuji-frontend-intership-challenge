import { Quill } from 'react-quill';

import { DownIcon } from '../icons';

const CustomUndo = () => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2.5 7.50033H13.75C15.8211 7.50033 17.5 9.17926 17.5 11.2503C17.5 13.3214 15.8211 15.0003 13.75 15.0003H10M2.5 7.50033L5.83333 4.16699M2.5 7.50033L5.83333 10.8337'
      stroke='#475467'
      strokeWidth='1.67'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const CustomRedo = () => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.5 7.50033H6.25C4.17893 7.50033 2.5 9.17926 2.5 11.2503C2.5 13.3214 4.17893 15.0003 6.25 15.0003H10M17.5 7.50033L14.1667 4.16699M17.5 7.50033L14.1667 10.8337'
      stroke='#475467'
      strokeWidth='1.67'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

// function undoChange() {
//     this.quill.history.undo();
// }
// function redoChange() {
//     this.quill.history.redo();
// }

const Size = Quill.import('formats/size');
Size.whitelist = ['extra-small', 'small', 'medium', 'large', 'extra-large', 'huge'];
Quill.register(Size, true);

export const modules = {
  toolbar: {
    container: '#toolbar',
    // handlers: {
    //     undo: undoChange,
    //     redo: redoChange,
    // },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

export const formats = [
  'size',
  'bold',
  'italic',
  'underline',
  'align',
  'strike',
  'list',
  'bullet',
  'indent',
];

export const QuillToolbar = () => {
  return (
    <div id='toolbar' className='flex'>
      <span className='ql-formats'>
        <select aria-label='select' className='ql-size' defaultValue='medium'>
          <option value='small'>12 px</option>
          <option value='medium'>16 px</option>
          <option value='large'>20 px</option>
          <option value='huge'>24 px</option>
        </select>
        <DownIcon className='ql-svg' />
      </span>

      <span className='ql-formats'>
        <button aria-label='button' className='ql-bold' />
        <button aria-label='button' className='ql-italic' />
        <button aria-label='button' className='ql-underline' />
        <button aria-label='button' className='ql-strike' />
      </span>
      <span className='ql-formats'>
        <button aria-label='button' className='ql-list' value='ordered' />
        <button aria-label='button' className='ql-list' value='bullet' />
        <button aria-label='button' className='ql-indent' value='-1' />
        <button aria-label='button' className='ql-indent' value='+1' />
      </span>
      <span className='ql-formats'>
        <button aria-label='button' className='ql-undo'>
          <CustomUndo />
        </button>
        <button aria-label='button' className='ql-redo'>
          <CustomRedo />
        </button>
      </span>
      <span className='ql-formats'>
        <button aria-label='button' className='ql-align' value='' />
        <button aria-label='button' className='ql-align' value={'center'} />
        <button aria-label='button' className='ql-align' value={'right'} />
        <button aria-label='button' className='ql-align' value={'justify'} />
      </span>
    </div>
  );
};

export default QuillToolbar;
