interface ILogoIcon {
  className?: string;
  onClick?: () => void;
}

const Logo = ({ className, onClick }: ILogoIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_993_1526)'>
        <rect width='32' height='32' rx='8' fill='white' />
        <rect width='32' height='32' rx='8' fill='url(#paint0_linear_993_1526)' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16 2.03885C8.28948 2.03885 2.03885 8.28948 2.03885 16C2.03885 23.7106 8.28948 29.9612 16 29.9612C23.7106 29.9612 29.9612 23.7106 29.9612 16C29.9612 8.28948 23.7106 2.03885 16 2.03885ZM1.96118 16C1.96118 8.24658 8.24658 1.96118 16 1.96118C23.7535 1.96118 30.0389 8.24658 30.0389 16C30.0389 23.7535 23.7535 30.0389 16 30.0389C8.24658 30.0389 1.96118 23.7535 1.96118 16Z'
          fill='#D0D5DD'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16 12.0779C13.8338 12.0779 12.0777 13.834 12.0777 16.0002C12.0777 18.1665 13.8338 19.9226 16 19.9226C18.1662 19.9226 19.9223 18.1665 19.9223 16.0002C19.9223 13.834 18.1662 12.0779 16 12.0779ZM12 16.0002C12 13.7911 13.7909 12.0002 16 12.0002C18.2091 12.0002 20 13.7911 20 16.0002C20 18.2094 18.2091 20.0002 16 20.0002C13.7909 20.0002 12 18.2094 12 16.0002Z'
          fill='#D0D5DD'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.9995 13.3201C14.5196 13.3201 13.3199 14.5198 13.3199 15.9997C13.3199 17.4796 14.5196 18.6793 15.9995 18.6793C17.4794 18.6793 18.6791 17.4796 18.6791 15.9997C18.6791 14.5198 17.4794 13.3201 15.9995 13.3201ZM13.2422 15.9997C13.2422 14.4769 14.4767 13.2424 15.9995 13.2424C17.5223 13.2424 18.7568 14.4769 18.7568 15.9997C18.7568 17.5225 17.5223 18.757 15.9995 18.757C14.4767 18.757 13.2422 17.5225 13.2422 15.9997Z'
          fill='#D0D5DD'
        />
        <path d='M15.9612 0H16.0389V32H15.9612V0Z' fill='#D0D5DD' />
        <path
          d='M32 15.9609L32 16.0386L-3.39506e-09 16.0386L0 15.9609L32 15.9609Z'
          fill='#D0D5DD'
        />
        <path d='M26.6016 0H26.6792V32H26.6016V0Z' fill='#D0D5DD' />
        <path d='M10.6409 0H10.7185V32H10.6409V0Z' fill='#D0D5DD' />
        <path d='M21.2812 0H21.3589V32H21.2812V0Z' fill='#D0D5DD' />
        <path d='M5.32031 0H5.39798V32H5.32031V0Z' fill='#D0D5DD' />
        <path
          d='M32 26.6016L32 26.6792L-3.39506e-09 26.6792L0 26.6016L32 26.6016Z'
          fill='#D0D5DD'
        />
        <path
          d='M32 10.6406L32 10.7183L-3.39506e-09 10.7183L0 10.6406L32 10.6406Z'
          fill='#D0D5DD'
        />
        <path
          d='M32 21.2812L32 21.3589L-3.39506e-09 21.3589L0 21.2812L32 21.2812Z'
          fill='#D0D5DD'
        />
        <path
          d='M32 5.32031L32 5.39798L-3.39506e-09 5.39798L0 5.32031L32 5.32031Z'
          fill='#D0D5DD'
        />
        <g filter='url(#filter0_dd_993_1526)'>
          <circle cx='16' cy='16' r='8' fill='url(#paint1_linear_993_1526)' />
        </g>
        <g filter='url(#filter1_b_993_1526)'>
          <path
            d='M0 16H32V19.2C32 23.6804 32 25.9206 31.1281 27.6319C30.3611 29.1372 29.1372 30.3611 27.6319 31.1281C25.9206 32 23.6804 32 19.2 32H12.8C8.31958 32 6.07937 32 4.36808 31.1281C2.86278 30.3611 1.63893 29.1372 0.871948 27.6319C0 25.9206 0 23.6804 0 19.2V16Z'
            fill='white'
            fillOpacity='0.2'
          />
        </g>
      </g>
      <rect
        x='0.1'
        y='0.1'
        width='31.8'
        height='31.8'
        rx='7.9'
        stroke='#D0D5DD'
        strokeWidth='0.2'
      />
      <defs>
        <filter
          id='filter0_dd_993_1526'
          x='5'
          y='6'
          width='22'
          height='22'
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
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0'
          />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_993_1526' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='1' />
          <feGaussianBlur stdDeviation='1.5' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_dropShadow_993_1526'
            result='effect2_dropShadow_993_1526'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect2_dropShadow_993_1526'
            result='shape'
          />
        </filter>
        <filter
          id='filter1_b_993_1526'
          x='-5'
          y='11'
          width='42'
          height='26'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='2.5' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_993_1526' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_993_1526'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_993_1526'
          x1='16'
          y1='0'
          x2='16'
          y2='32'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' />
          <stop offset='1' stopColor='#D0D5DD' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_993_1526'
          x1='12'
          y1='24'
          x2='20'
          y2='8'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#53389E' />
          <stop offset='1' stopColor='#6941C6' />
        </linearGradient>
        <clipPath id='clip0_993_1526'>
          <rect width='32' height='32' rx='8' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
