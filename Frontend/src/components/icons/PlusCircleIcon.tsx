interface IPlusCircleIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const PlusCircleIcon = ({ className, onClick, color }: IPlusCircleIcon) => {
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
        d='M28 21V35M21 28H35'
        stroke='#079455'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default PlusCircleIcon;
