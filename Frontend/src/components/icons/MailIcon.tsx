interface IMailIcon {
  className?: string;
  onClick?: () => void;
}

const MailIcon = ({ className, onClick }: IMailIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='25'
      height='26'
      viewBox='0 0 25 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_215_2086)'>
        <path
          d='M2.165 8.96667C2.165 7.65715 2.16513 6.68494 2.22803 5.91505C2.29078 5.14707 2.41516 4.59494 2.65565 4.12295C3.08724 3.27591 3.77591 2.58724 4.62295 2.15565C5.09494 1.91516 5.64707 1.79078 6.41505 1.72803C7.18494 1.66513 8.15716 1.665 9.46667 1.665H15.5333C16.8428 1.665 17.8151 1.66513 18.585 1.72803C19.3529 1.79078 19.9051 1.91516 20.377 2.15565C21.2241 2.58724 21.9128 3.27591 22.3443 4.12295C22.5848 4.59494 22.7092 5.14707 22.772 5.91505C22.8349 6.68494 22.835 7.65716 22.835 8.96667V15.0333C22.835 16.3428 22.8349 17.3151 22.772 18.085C22.7092 18.8529 22.5848 19.4051 22.3443 19.877C21.9128 20.7241 21.2241 21.4128 20.377 21.8443C19.9051 22.0848 19.3529 22.2092 18.585 22.272C17.8151 22.3349 16.8428 22.335 15.5333 22.335H9.46667C8.15715 22.335 7.18494 22.3349 6.41505 22.272C5.64707 22.2092 5.09494 22.0848 4.62295 21.8443C3.77591 21.4128 3.08724 20.7241 2.65565 19.877C2.41516 19.4051 2.29078 18.8529 2.22803 18.085C2.16513 17.3151 2.165 16.3428 2.165 15.0333V8.96667Z'
          fill='white'
          stroke='#D0D5DD'
          strokeWidth='0.33'
        />
        <path
          d='M17.0385 6.39221L12.5481 9.89653L7.95514 6.39221V6.39316L7.96069 6.39789V11.3049L12.4963 14.885L17.0385 11.4432V6.39221Z'
          fill='#EA4335'
        />
        <path
          d='M18.2176 5.53979L17.0384 6.39219V11.4431L20.749 8.59423V6.87806C20.749 6.87806 20.2986 4.42693 18.2176 5.53979Z'
          fill='#FBBC05'
        />
        <path
          d='M17.0384 11.4432V17.9944H19.8824C19.8824 17.9944 20.6917 17.9111 20.75 16.9886V8.59433L17.0384 11.4432Z'
          fill='#34A853'
        />
        <path d='M7.9609 18V11.3048L7.95514 11.3001L7.9609 18Z' fill='#C5221F' />
        <path
          d='M7.9551 6.39322L6.78234 5.54555C4.70135 4.43269 4.25 6.88287 4.25 6.88287V8.59904L7.9551 11.3002V6.39322Z'
          fill='#C5221F'
        />
        <path d='M7.95514 6.39313V11.3001L7.9609 11.3049V6.39786L7.95514 6.39313Z' fill='#C5221F' />
        <path
          d='M4.25 8.59991V16.9942C4.30734 17.9176 5.11754 18 5.11754 18H7.96158L7.9551 11.3001L4.25 8.59991Z'
          fill='#4285F4'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_215_2086'
          x='-1.5'
          y='-1'
          width='28'
          height='28'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='1' />
          <feGaussianBlur stdDeviation='1' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0'
          />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_215_2086' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_215_2086'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default MailIcon;
