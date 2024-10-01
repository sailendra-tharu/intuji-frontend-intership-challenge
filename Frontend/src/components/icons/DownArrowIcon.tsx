interface IDownArrowIcon {
  className?: string;
  onClick?: any;
  color?: string;
}

const DownArrowIcon = ({ className, onClick }: IDownArrowIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.00006 2V10M6.00006 10L9.00006 7M6.00006 10L3.00006 7'
        stroke='#475467'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default DownArrowIcon;
