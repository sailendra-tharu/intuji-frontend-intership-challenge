interface IInfoIcon {
  className?: string;
  onClick?: () => void;
}

const InfoIcon = ({ className, onClick }: IInfoIcon) => {
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
      <g clipPath='url(#clip0_614_5212)'>
        <path
          d='M6.06004 5.99992C6.21678 5.55436 6.52614 5.17866 6.93334 4.93934C7.34055 4.70002 7.8193 4.61254 8.28483 4.69239C8.75035 4.77224 9.17259 5.01427 9.47676 5.3756C9.78093 5.73694 9.94741 6.19427 9.94671 6.66659C9.94671 7.99992 7.94671 8.66659 7.94671 8.66659M8.00004 11.3333H8.00671M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00004 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z'
          stroke='black'
          strokeWidth='1.33'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_614_5212'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InfoIcon;