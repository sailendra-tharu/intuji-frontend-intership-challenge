interface IMathematicalFileIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
  fill?: string;
}

const MathematicalFileIcon = ({
  className,
  onClick,
  color = '#079455',
  fill = '#DBFAE6',
}: IMathematicalFileIcon) => {
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
        d='M36 28.5V22.8C36 21.1198 36 20.2798 35.673 19.638C35.3854 19.0735 34.9265 18.6146 34.362 18.327C33.7202 18 32.8802 18 31.2 18H24.8C23.1198 18 22.2798 18 21.638 18.327C21.0735 18.6146 20.6146 19.0735 20.327 19.638C20 20.2798 20 21.1198 20 22.8V33.2C20 34.8802 20 35.7202 20.327 36.362C20.6146 36.9265 21.0735 37.3854 21.638 37.673C22.2798 38 23.1198 38 24.8 38H28M30 27H24M26 31H24M32 23H24M32.5 37L37 32.5M33 32.8398V32.8203M36.625 36.6016V36.625'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default MathematicalFileIcon;
