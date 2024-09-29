interface IBelgiumFlagIcon {
  className?: string;
  onClick?: () => void;
}

const BelgiumFlagIcon = ({ className, onClick }: IBelgiumFlagIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_478_4795)'>
        <path
          d='M23.25 11.9997C23.25 7.08721 20.1375 2.92471 15.75 1.38721V22.6122C20.1375 21.0747 23.25 16.9122 23.25 11.9997Z'
          fill='#ED4C5C'
        />
        <path
          d='M0.75 11.9997C0.75 16.9122 3.9 21.0747 8.25 22.6122V1.38721C3.9 2.92471 0.75 7.08721 0.75 11.9997Z'
          fill='#3E4347'
        />
        <path
          d='M15.75 1.3875C14.5875 0.975 13.3125 0.75 12 0.75C10.6875 0.75 9.4125 0.975 8.25 1.3875V22.6125C9.4125 23.025 10.6875 23.25 12 23.25C13.3125 23.25 14.5875 23.025 15.75 22.6125V1.3875Z'
          fill='#FFE62E'
        />
      </g>
      <defs>
        <clipPath id='clip0_478_4795'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BelgiumFlagIcon;
