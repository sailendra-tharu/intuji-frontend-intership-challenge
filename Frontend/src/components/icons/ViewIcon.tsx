interface IViewIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const ViewIcon = ({ className, onClick, color = '#667085' }: IViewIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='20'
      height='20'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.61342 8.47562C1.52262 8.33186 1.47723 8.25998 1.45182 8.14911C1.43273 8.06583 1.43273 7.9345 1.45182 7.85122C1.47723 7.74035 1.52262 7.66847 1.61341 7.52471C2.36369 6.33672 4.59693 3.3335 8.00027 3.3335C11.4036 3.3335 13.6369 6.33672 14.3871 7.52471C14.4779 7.66847 14.5233 7.74035 14.5487 7.85122C14.5678 7.9345 14.5678 8.06583 14.5487 8.14911C14.5233 8.25998 14.4779 8.33186 14.3871 8.47562C13.6369 9.6636 11.4036 12.6668 8.00027 12.6668C4.59693 12.6668 2.36369 9.6636 1.61342 8.47562Z'
        stroke='#667085'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.00027 10.0002C9.10484 10.0002 10.0003 9.10473 10.0003 8.00016C10.0003 6.89559 9.10484 6.00016 8.00027 6.00016C6.8957 6.00016 6.00027 6.89559 6.00027 8.00016C6.00027 9.10473 6.8957 10.0002 8.00027 10.0002Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default ViewIcon;
