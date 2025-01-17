interface IUserCircleIcon {
  className?: string;
  onClick?: () => void;
}

const UserCircleIcon = ({ className, onClick }: IUserCircleIcon) => {
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
      <rect width='56' height='56' rx='28' fill='#F9F5FF' />
      <path
        d='M36 37C36 35.6044 36 34.9067 35.8278 34.3389C35.44 33.0605 34.4395 32.06 33.1611 31.6722C32.5933 31.5 31.8956 31.5 30.5 31.5H25.5C24.1044 31.5 23.4067 31.5 22.8389 31.6722C21.5605 32.06 20.56 33.0605 20.1722 34.3389C20 34.9067 20 35.6044 20 37M32.5 23.5C32.5 25.9853 30.4853 28 28 28C25.5147 28 23.5 25.9853 23.5 23.5C23.5 21.0147 25.5147 19 28 19C30.4853 19 32.5 21.0147 32.5 23.5Z'
        stroke='#6941C6'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default UserCircleIcon;
