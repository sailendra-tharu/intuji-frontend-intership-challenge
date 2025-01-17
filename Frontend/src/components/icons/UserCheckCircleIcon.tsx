interface IUserCheckCircleIcon {
  className?: string;
  onClick?: () => void;
}

const UserCheckCircleIcon = ({ className, onClick }: IUserCheckCircleIcon) => {
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
        d='M28 31.5H23.5C22.1044 31.5 21.4067 31.5 20.8389 31.6722C19.5605 32.06 18.56 33.0605 18.1722 34.3389C18 34.9067 18 35.6044 18 37M32 34L34 36L38 32M30.5 23.5C30.5 25.9853 28.4853 28 26 28C23.5147 28 21.5 25.9853 21.5 23.5C21.5 21.0147 23.5147 19 26 19C28.4853 19 30.5 21.0147 30.5 23.5Z'
        stroke='#079455'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default UserCheckCircleIcon;
