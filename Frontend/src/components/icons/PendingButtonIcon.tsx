interface IPendingButtonIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const PendingButtonIcon = ({ className, onClick, color }: IPendingButtonIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='10'
      height='10'
      viewBox='0 0 10 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='5' cy='5' r='4' fill='#2661FE' />
    </svg>
  );
};
export default PendingButtonIcon;
