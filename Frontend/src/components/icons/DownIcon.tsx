interface IDownIcon {
  className?: string;
  onClick?: any;
  color?: string;
}

const DownIcon = ({ className, onClick}: IDownIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 9L12 15L18 9'
        stroke='#667085'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default DownIcon;
