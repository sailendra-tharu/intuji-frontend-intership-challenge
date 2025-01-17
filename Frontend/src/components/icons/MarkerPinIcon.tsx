interface IMarkerPinIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const MarkerPinIcon = ({ className, onClick, color = 'black' }: IMarkerPinIcon) => {
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
        d='M9.99992 10.8333C11.3806 10.8333 12.4999 9.714 12.4999 8.33329C12.4999 6.95258 11.3806 5.83329 9.99992 5.83329C8.61921 5.83329 7.49992 6.95258 7.49992 8.33329C7.49992 9.714 8.61921 10.8333 9.99992 10.8333Z'
        stroke={color}
        strokeWidth='1.6625'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.99992 18.3333C13.3333 15 16.6666 12.0152 16.6666 8.33329C16.6666 4.65139 13.6818 1.66663 9.99992 1.66663C6.31802 1.66663 3.33325 4.65139 3.33325 8.33329C3.33325 12.0152 6.66658 15 9.99992 18.3333Z'
        stroke={color}
        strokeWidth='1.6625'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default MarkerPinIcon;
