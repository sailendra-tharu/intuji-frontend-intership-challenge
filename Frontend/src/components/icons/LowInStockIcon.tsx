interface LowInStockIcon {
  className?: string;
  onClick?: () => void;
}

const LowInStockIcon = ({ className, onClick }: LowInStockIcon) => {
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
      <rect width='56' height='56' rx='28' fill='#FFFAEB' />
      <path
        d='M18 33L25.8686 25.1314C26.2646 24.7354 26.4627 24.5373 26.691 24.4632C26.8918 24.3979 27.1082 24.3979 27.309 24.4632C27.5373 24.5373 27.7354 24.7354 28.1314 25.1314L30.8686 27.8686C31.2646 28.2646 31.4627 28.4627 31.691 28.5368C31.8918 28.6021 32.1082 28.6021 32.309 28.5368C32.5373 28.4627 32.7354 28.2646 33.1314 27.8686L38 23M18 33H25M18 33V26'
        stroke='#DC6803'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LowInStockIcon;
