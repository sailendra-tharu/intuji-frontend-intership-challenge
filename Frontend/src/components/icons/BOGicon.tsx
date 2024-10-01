interface IBOGicon {
  className?: string;
  onClick?: () => void;
}

const BOGicon = ({ className, onClick }: IBOGicon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='16' height='16' rx='5' fill='url(#pattern0)' />
      <defs>
        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_1229_5938' transform='translate(-0.0138889) scale(0.00694444)' />
        </pattern>
        <image
          id='image0_1229_5938'
          width='148'
          height='144'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};

export default BOGicon;
