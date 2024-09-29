interface ILeftArrowIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const LeftArrowIcon = ({ className, onClick, color }: ILeftArrowIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.8333 9.99999H4.16663M4.16663 9.99999L9.99996 15.8333M4.16663 9.99999L9.99996 4.16666'
        stroke='currentColor'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LeftArrowIcon;
