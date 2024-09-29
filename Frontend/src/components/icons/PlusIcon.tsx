interface IPlusIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const PlusIcon = ({ className, onClick, color = '#667085' }: IPlusIcon) => {
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
        d='M10.0001 4.16699V15.8337M4.16675 10.0003H15.8334'
        stroke={color}
        strokeWidth='1.67'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default PlusIcon;
