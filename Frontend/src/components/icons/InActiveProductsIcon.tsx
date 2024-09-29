interface InActiveProductsIconProps {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const InActiveProductsIcon = ({ className, onClick, color }: InActiveProductsIconProps) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='56'
      height='56'
      viewBox='0 0 56 56'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='56' height='56' rx='28' fill='#FEF7C3' />
      <path
        d='M24.8087 19.1966L27.4382 18.2105C27.6461 18.1326 27.75 18.0936 27.857 18.0782C27.9518 18.0644 28.0482 18.0644 28.143 18.0782C28.25 18.0936 28.3539 18.1326 28.5618 18.2105L33.9236 20.2212C34.6722 20.5019 35.0465 20.6423 35.3223 20.8854C35.566 21.1001 35.7537 21.371 35.8692 21.6746C36 22.0182 36 22.418 36 23.2175V27.9999C36 28.7202 35.8847 29.4117 35.6818 30.0708M33.6219 33.6255C31.9362 35.5859 29.7879 36.9788 28.6996 37.6138C28.4772 37.7436 28.366 37.8085 28.2098 37.842C28.0885 37.868 27.9116 37.868 27.7904 37.842C27.6341 37.8085 27.5234 37.7439 27.302 37.6147C25.354 36.4783 20 32.9083 20 27.9999V21.7762C20 21.3092 20.2897 20.8912 20.7269 20.7273M19 18.9999L37 36.9999'
        stroke='#CA8504'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default InActiveProductsIcon;
