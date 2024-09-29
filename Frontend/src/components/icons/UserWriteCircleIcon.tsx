interface IUserWriteCircleIcon {
  className?: string;
  onClick?: () => void;
}

const UserWriteCircleIcon = ({ className, onClick }: IUserWriteCircleIcon) => {
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
        d='M25 31.5H23.5C22.1044 31.5 21.4067 31.5 20.8389 31.6722C19.5605 32.06 18.56 33.0605 18.1722 34.3389C18 34.9067 18 35.6044 18 37M30.5 23.5C30.5 25.9853 28.4853 28 26 28C23.5147 28 21.5 25.9853 21.5 23.5C21.5 21.0147 23.5147 19 26 19C28.4853 19 30.5 21.0147 30.5 23.5ZM27 37L30.1014 36.1139C30.2499 36.0715 30.3241 36.0502 30.3934 36.0184C30.4549 35.9902 30.5134 35.9558 30.5679 35.9158C30.6293 35.8707 30.6839 35.8161 30.7932 35.7068L37.25 29.25C37.9404 28.5597 37.9404 27.4403 37.25 26.75C36.5597 26.0596 35.4404 26.0596 34.75 26.75L28.2932 33.2068C28.1839 33.3161 28.1293 33.3707 28.0842 33.4321C28.0442 33.4866 28.0098 33.5451 27.9816 33.6066C27.9497 33.6759 27.9285 33.7501 27.8861 33.8987L27 37Z'
        stroke='#CA8504'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default UserWriteCircleIcon;
