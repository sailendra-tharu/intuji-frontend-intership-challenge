interface IResetPasswordPasswordIcon {
  className?: string;
  onClick?: () => void;
}

const ResetPasswordSucessIcon = ({ className, onClick }: IResetPasswordPasswordIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='60'
      height='60'
      viewBox='0 0 60 60'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_6_14379)'>
        <rect x='2' y='1' width='56' height='56' rx='12' fill='white' shapeRendering='crispEdges' />
        <rect
          x='2.5'
          y='1.5'
          width='55'
          height='55'
          rx='11.5'
          stroke='#EAECF0'
          shapeRendering='crispEdges'
        />
        <path
          d='M24.7502 29L28.2502 32.5L35.2502 25.5M41.6668 29C41.6668 35.4433 36.4435 40.6666 30.0002 40.6666C23.5568 40.6666 18.3335 35.4433 18.3335 29C18.3335 22.5567 23.5568 17.3333 30.0002 17.3333C36.4435 17.3333 41.6668 22.5567 41.6668 29Z'
          stroke='#344054'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_6_14379'
          x='0'
          y='0'
          width='60'
          height='60'
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
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_6_14379' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_6_14379'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ResetPasswordSucessIcon;
