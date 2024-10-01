interface IGlobeIcon {
  className?: string;
  onClick?: () => void;
}

const GlobeIcon = ({ className, onClick }: IGlobeIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_614_5216)'>
        <path
          d='M1.33337 7.99992H14.6667M1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666M1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00004 1.33325M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666M14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325M8.00004 1.33325C9.66756 3.15882 10.6152 5.52794 10.6667 7.99992C10.6152 10.4719 9.66756 12.841 8.00004 14.6666M8.00004 1.33325C6.33252 3.15882 5.38487 5.52794 5.33337 7.99992C5.38487 10.4719 6.33252 12.841 8.00004 14.6666'
          stroke='#667085'
          strokeWidth='1.33'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_614_5216'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GlobeIcon;
