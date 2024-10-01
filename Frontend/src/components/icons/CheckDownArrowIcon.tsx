interface CheckDownArrowIcon {
  className?: string;
  onClick?: () => void;
}

const CheckDownArrowIcon = ({ className, onClick }: CheckDownArrowIcon) => {
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
      <rect width='56' height='56' rx='28' fill='#FEF7C3' />
      <path
        d='M24 28L28 32M28 32L32 28M28 32V24M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z'
        stroke='#CA8504'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CheckDownArrowIcon;
