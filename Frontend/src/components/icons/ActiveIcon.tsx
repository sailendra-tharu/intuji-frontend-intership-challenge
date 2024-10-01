interface IActiveIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const ActiveIcon = ({ className, onClick}: IActiveIcon) => {
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
      <g clipPath='url(#clip0_1569_5910)'>
        <path
          d='M14.6667 7.39065V8.00398C14.6659 9.44159 14.2004 10.8404 13.3396 11.9919C12.4788 13.1433 11.2689 13.9856 9.89028 14.3932C8.51166 14.8009 7.03821 14.7519 5.68969 14.2537C4.34116 13.7555 3.18981 12.8347 2.40735 11.6287C1.62488 10.4227 1.25323 8.99602 1.34783 7.56152C1.44242 6.12702 1.99818 4.76153 2.93223 3.66869C3.86628 2.57586 5.12856 1.81423 6.53083 1.49741C7.9331 1.18059 9.40022 1.32554 10.7134 1.91065M14.6667 2.66683L8.00004 9.34016L6.00004 7.34016'
          stroke='#667085'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1569_5910'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ActiveIcon;
