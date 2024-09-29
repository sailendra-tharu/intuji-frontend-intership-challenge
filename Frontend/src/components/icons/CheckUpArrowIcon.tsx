interface CheckUpArrowIcon {
  className?: string;
  onClick?: () => void;
}

const CheckUpArrowIcon = ({ className, onClick }: CheckUpArrowIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='56'
      height='56'
      viewBox='0 0 56 56'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='56' height='56' rx='28' fill='#DBFAE6' />
      <path
        d='M32 28L28 24M28 24L24 28M28 24V32M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z'
        stroke='#079455'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CheckUpArrowIcon;
