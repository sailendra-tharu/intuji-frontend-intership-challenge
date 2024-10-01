interface ICWOicon {
  className?: string;
  onClick?: () => void;
}

const CWOicon = ({ className, onClick }: ICWOicon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_1229_5951)'>
        <path
          d='M7 12.999C10.3137 12.999 13 10.3127 13 6.99902C13 3.68531 10.3137 0.999023 7 0.999023C3.68629 0.999023 1 3.68531 1 6.99902C1 10.3127 3.68629 12.999 7 12.999Z'
          fill='#344054'
        />
        <path
          d='M4.3 6.99902L6.1 8.79902L9.7 5.19902M13 6.99902C13 10.3127 10.3137 12.999 7 12.999C3.68629 12.999 1 10.3127 1 6.99902C1 3.68531 3.68629 0.999023 7 0.999023C10.3137 0.999023 13 3.68531 13 6.99902Z'
          stroke='#FCFCFD'
          strokeWidth='1.11111'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1229_5951'>
          <rect
            width='13.3333'
            height='13.3333'
            fill='white'
            transform='translate(0.333008 0.333008)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CWOicon;
