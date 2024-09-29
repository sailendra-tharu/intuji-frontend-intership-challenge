interface IAttachmentIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const AttachmentIcon = ({ className, onClick, color = '#000000 ' }: IAttachmentIcon) => {
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
        d='M17.627 9.08291L10.114 16.5959C8.40543 18.3045 5.63534 18.3045 3.92679 16.5959C2.21825 14.8874 2.21825 12.1173 3.92679 10.4087L11.4398 2.89573C12.5788 1.7567 14.4256 1.7567 15.5646 2.89573C16.7036 4.03476 16.7036 5.88149 15.5646 7.02052L8.34621 14.2389C7.7767 14.8084 6.85333 14.8084 6.28382 14.2389C5.7143 13.6694 5.7143 12.746 6.28382 12.1765L12.6183 5.84201'
        stroke={color}
        strokeWidth='1.6625'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default AttachmentIcon;
