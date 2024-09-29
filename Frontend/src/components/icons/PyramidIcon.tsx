interface IPyramidIcon {
  className?: string;
  onClick?: () => void;
}

const PyramidIcon = ({ className, onClick }: IPyramidIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='17'
      height='16'
      viewBox='0 0 17 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.5 8H12.5M2.5 4H14.5M6.5 12H10.5'
        stroke='black'
        strokeWidth='1.33'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default PyramidIcon;
