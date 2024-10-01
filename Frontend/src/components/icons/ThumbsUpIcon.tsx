interface IThumbsUpIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
  fill?: string;
}

const ThumbsUpIcon = ({ className, onClick, color, fill }: IThumbsUpIcon) => {
  return (
    <svg
      width='56'
      height='56'
      viewBox='0 0 56 56'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
    >
      <rect width='56' height='56' rx='28' fill={fill ?? '#F4EBFF'} />
      <path
        d='M23 38V27M18 29V36C18 37.1046 18.8954 38 20 38H33.4262C34.907 38 36.1662 36.9197 36.3914 35.4562L37.4683 28.4562C37.7479 26.6389 36.3418 25 34.5032 25H31C30.4477 25 30 24.5523 30 24V20.4658C30 19.104 28.896 18 27.5342 18C27.2093 18 26.915 18.1913 26.7831 18.4881L23.2639 26.4061C23.1034 26.7673 22.7453 27 22.3501 27H20C18.8954 27 18 27.8954 18 29Z'
        stroke={color ?? '#6941C6'}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default ThumbsUpIcon;
