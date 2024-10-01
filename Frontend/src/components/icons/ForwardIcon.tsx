interface IForwardIcon {
  className?: string;
  onClick?: any;
  color?: string;
}

const ForwardIcon = ({ className, onClick, color = '#fcfcfd' }: IForwardIcon) => {
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
        d='M7.5 15L12.5 10L7.5 5'
        stroke={color}
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ForwardIcon;
