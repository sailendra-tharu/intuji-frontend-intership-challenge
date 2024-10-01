interface ICrossDeleteIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const CrossDeleteIcon = ({ className, onClick, color }: ICrossDeleteIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      color={color}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15 5L5 15M5 5L15 15'
        stroke='#475467'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CrossDeleteIcon;
