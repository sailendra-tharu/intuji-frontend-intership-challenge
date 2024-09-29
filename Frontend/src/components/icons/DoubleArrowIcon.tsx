interface IDoubleArrowIcon {
  className?: string;
  onClick?: () => void;
}
const DoubleArrowIcon = ({ className, onClick }: IDoubleArrowIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      width='19'
      height='18'
      viewBox='0 0 19 18'
      fill='none'
    >
      <path
        d='M5 12.75L8.75 9L5 5.25M10.25 12.75L14 9L10.25 5.25'
        stroke='#667085'
        stroke-width='1.33'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default DoubleArrowIcon;
