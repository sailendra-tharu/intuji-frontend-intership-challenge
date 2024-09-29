interface IBackArrowIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const BackArrowIcon = ({ className, onClick, color = '#344054' }: IBackArrowIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M26.6666 16H5.33325M5.33325 16L13.3333 24M5.33325 16L13.3333 8'
        stroke={color}
        strokeWidth='2.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default BackArrowIcon;
