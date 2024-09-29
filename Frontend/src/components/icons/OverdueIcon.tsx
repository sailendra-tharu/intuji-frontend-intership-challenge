interface OverdueIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const OverdueIcon = ({ className, onClick, color }: OverdueIcon) => {
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
      <rect width='56' height='56' rx='28' fill='#FEE4E2' />
      <path
        d='M28 33C28 35.7614 30.2386 38 33 38C35.7614 38 38 35.7614 38 33C38 30.2386 35.7614 28 33 28C30.2386 28 28 30.2386 28 33ZM28 33C28 31.8742 28.3721 30.8353 29 29.9995V21M28 33C28 33.8254 28.2 34.604 28.5541 35.2901C27.7117 36.0018 25.7658 36.5 23.5 36.5C20.4624 36.5 18 35.6046 18 34.5V21M29 21C29 22.1046 26.5376 23 23.5 23C20.4624 23 18 22.1046 18 21M29 21C29 19.8954 26.5376 19 23.5 19C20.4624 19 18 19.8954 18 21M18 30C18 31.1046 20.4624 32 23.5 32C25.689 32 27.5793 31.535 28.4646 30.8618M29 25.5C29 26.6046 26.5376 27.5 23.5 27.5C20.4624 27.5 18 26.6046 18 25.5'
        stroke='#D92D20'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default OverdueIcon;
