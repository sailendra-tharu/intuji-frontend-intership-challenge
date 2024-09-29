interface IAddButtonIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const AddButtonIcon = ({ className, onClick, color = '#FCFCFD ' }: IAddButtonIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      color={color}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 4.16666V15.8333M4.16669 9.99999H15.8334'
        stroke={color}
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default AddButtonIcon;
