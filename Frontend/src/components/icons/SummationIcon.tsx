interface SummationIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
  fill?: string;
}

const SummationIcon = ({
  className,
  onClick,
  color = '#6941C6',
  fill = '#F9F5FF',
}: SummationIcon) => {
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
      <rect width='56' height='56' rx='28' fill={fill} />
      <path
        d='M35.0909 32.7271V35.0907C35.0909 35.4041 34.9664 35.7047 34.7448 35.9264C34.5231 36.148 34.2225 36.2725 33.9091 36.2725H20.9091L28 27.9998L20.9091 19.7271H33.9091C34.2225 19.7271 34.5231 19.8516 34.7448 20.0732C34.9664 20.2948 35.0909 20.5954 35.0909 20.9089V23.2725'
        stroke={color}
        strokeWidth='2.36364'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SummationIcon;
