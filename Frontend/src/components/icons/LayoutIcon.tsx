interface PaidIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
  fill?: string;
}

const LayoutIcon = ({ className, onClick, color = '#6941C6', fill = '#F4EBFF' }: PaidIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='57'
      height='56'
      viewBox='0 0 57 56'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='0.666992' width='56' height='56' rx='28' fill={fill} />
      <path
        d='M19.667 25H37.667M25.667 25L25.667 37M24.467 19H32.867C34.5471 19 35.3872 19 36.029 19.327C36.5935 19.6146 37.0524 20.0735 37.34 20.638C37.667 21.2798 37.667 22.1198 37.667 23.8V32.2C37.667 33.8802 37.667 34.7202 37.34 35.362C37.0524 35.9265 36.5935 36.3854 36.029 36.673C35.3872 37 34.5471 37 32.867 37H24.467C22.7868 37 21.9468 37 21.305 36.673C20.7405 36.3854 20.2816 35.9265 19.994 35.362C19.667 34.7202 19.667 33.8802 19.667 32.2V23.8C19.667 22.1198 19.667 21.2798 19.994 20.638C20.2816 20.0735 20.7405 19.6146 21.305 19.327C21.9468 19 22.7868 19 24.467 19Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LayoutIcon;
