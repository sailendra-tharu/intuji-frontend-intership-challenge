interface IDeliveryNoteIcon {
  className?: string;
  onClick?: () => void;
}

const DeliveryNoteIcon = ({ className, onClick }: IDeliveryNoteIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9 18.7998L2 22.7998V6.7998L9 2.7998M9 18.7998L16 22.7998M9 18.7998V2.7998M16 22.7998L22 18.7998V2.7998L16 6.7998M16 22.7998V6.7998M16 6.7998L9 2.7998'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default DeliveryNoteIcon;
