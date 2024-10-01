interface IUserIcon {
  className?: string;
  onClick?: () => void;
}

const UserIcon = ({ className, onClick }: IUserIcon) => {
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
      <path
        d='M16.6667 17.5C16.6667 16.337 16.6667 15.7555 16.5231 15.2824C16.2 14.217 15.3663 13.3834 14.301 13.0602C13.8278 12.9167 13.2463 12.9167 12.0833 12.9167H7.91668C6.75371 12.9167 6.17222 12.9167 5.69906 13.0602C4.63372 13.3834 3.80004 14.217 3.47688 15.2824C3.33334 15.7555 3.33334 16.337 3.33334 17.5M13.75 6.25C13.75 8.32107 12.0711 10 10 10C7.92894 10 6.25001 8.32107 6.25001 6.25C6.25001 4.17893 7.92894 2.5 10 2.5C12.0711 2.5 13.75 4.17893 13.75 6.25Z'
        stroke='black'
        strokeWidth='1.6625'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default UserIcon;
