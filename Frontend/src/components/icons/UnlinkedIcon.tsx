interface IUnlinkedIcon {
  className?: string;
  onClick?: () => void;
}

const UnlinkedIcon = ({ className, onClick }: IUnlinkedIcon) => {
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
      <g clipPath='url(#clip0_4562_2137)'>
        <path
          d='M7.49984 3.33317V1.6665M12.4998 16.6665V18.3332M3.33317 7.49984H1.6665M16.6665 12.4998H18.3332M4.09502 4.09502L2.9165 2.9165M15.9047 15.9047L17.0832 17.0832M9.99984 14.7139L8.23207 16.4816C6.93032 17.7834 4.81977 17.7834 3.51802 16.4816C2.21628 15.1799 2.21628 13.0694 3.51802 11.7676L5.28579 9.99984M14.7139 9.99984L16.4817 8.23207C17.7834 6.93032 17.7834 4.81977 16.4817 3.51803C15.1799 2.21628 13.0694 2.21628 11.7676 3.51803L9.99984 5.28579'
          stroke='currentColor'
          strokeWidth='1.6625'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_4562_2137'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UnlinkedIcon;
