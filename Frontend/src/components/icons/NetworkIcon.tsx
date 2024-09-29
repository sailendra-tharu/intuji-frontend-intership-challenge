interface INetworkIcon {
  className?: string;
  onClick?: () => void;
}

const NetworkIcon = ({ className, onClick }: INetworkIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 11.3333V14M10 5.33333V14M6 8.66667V14M14 2V14'
        stroke='black'
        strokeWidth='1.33'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default NetworkIcon;
