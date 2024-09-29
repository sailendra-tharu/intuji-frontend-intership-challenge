interface IUpArrowIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const UpArrowIcon = ({ className, onClick, color }: IUpArrowIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='13'
      height='12'
      viewBox='0 0 13 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.66675 9.5V2.5M6.66675 2.5L3.16675 6M6.66675 2.5L10.1667 6'
        stroke='#079455'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default UpArrowIcon;
