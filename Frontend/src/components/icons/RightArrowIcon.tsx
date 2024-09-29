interface IRightArrowIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const RightArrowIcon = ({ className, onClick, color }: IRightArrowIcon) => {
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
        d='M4.16669 9.99999H15.8334M15.8334 9.99999L10 4.16666M15.8334 9.99999L10 15.8333'
        stroke='currentColor'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default RightArrowIcon;
