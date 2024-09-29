interface ISendIcon {
  className?: string;
  onClick?: () => void;
}

const SendIcon = ({ className, onClick }: ISendIcon) => {
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
      <g clipPath='url(#clip0_3428_10592)'>
        <path
          d='M6.9997 9.00004L13.9997 2.00003M7.08476 9.21875L8.83683 13.7241C8.99118 14.121 9.06835 14.3194 9.17956 14.3774C9.27595 14.4276 9.39079 14.4277 9.48725 14.3775C9.59852 14.3197 9.67592 14.1214 9.83074 13.7247L14.2243 2.46617C14.3641 2.10805 14.4339 1.92899 14.3957 1.81457C14.3625 1.7152 14.2845 1.63722 14.1852 1.60403C14.0707 1.5658 13.8917 1.63568 13.5336 1.77544L2.27507 6.169C1.87836 6.32381 1.68 6.40122 1.62219 6.51249C1.57208 6.60895 1.57215 6.72378 1.62237 6.82018C1.68031 6.93138 1.87876 7.00856 2.27566 7.16291L6.78099 8.91498C6.86156 8.94631 6.90184 8.96198 6.93576 8.98617C6.96583 9.00762 6.99212 9.03391 7.01356 9.06398C7.03776 9.0979 7.05342 9.13818 7.08476 9.21875Z'
          stroke='#667085'
          strokeWidth='1.67'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_3428_10592'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SendIcon;
