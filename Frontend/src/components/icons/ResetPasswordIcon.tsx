interface IResetPasswordIcon {
  className?: string;
  onClick?: () => void;
}

const ResetPasswordIcon = ({ className, onClick }: IResetPasswordIcon) => {
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
      <g filter='url(#filter0_d_6_14314)'>
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
          d='M35.8333 26.6667V24.3333C35.8333 21.1117 33.2216 18.5 30 18.5C26.7783 18.5 24.1666 21.1117 24.1666 24.3333V26.6667M30 31.9167V34.25M26.2666 39.5H33.7333C35.6935 39.5 36.6736 39.5 37.4223 39.1185C38.0808 38.783 38.6163 38.2475 38.9518 37.589C39.3333 36.8403 39.3333 35.8602 39.3333 33.9V32.2667C39.3333 30.3065 39.3333 29.3264 38.9518 28.5777C38.6163 27.9191 38.0808 27.3837 37.4223 27.0481C36.6736 26.6667 35.6935 26.6667 33.7333 26.6667H26.2666C24.3064 26.6667 23.3264 26.6667 22.5777 27.0481C21.9191 27.3837 21.3837 27.9191 21.0481 28.5777C20.6666 29.3264 20.6666 30.3065 20.6666 32.2667V33.9C20.6666 35.8602 20.6666 36.8403 21.0481 37.589C21.3837 38.2475 21.9191 38.783 22.5777 39.1185C23.3264 39.5 24.3064 39.5 26.2666 39.5Z'
          stroke='#344054'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_6_14314'
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
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_6_14314' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_6_14314'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ResetPasswordIcon;
