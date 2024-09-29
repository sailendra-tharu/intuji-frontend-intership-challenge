interface IVATExceptionIcon {
  className?: string;
  onClick?: () => void;
}

const VATExceptionIcon = ({ className, onClick }: IVATExceptionIcon) => {
  return (
    <div>
      <svg
        className={className}
        onClick={onClick}
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_4759_6355)'>
          <path
            d='M7.50002 7.50008H7.50835M12.5 12.5001H12.5084M13.3334 6.66675L6.66669 13.3334M7.91669 7.50008C7.91669 7.7302 7.73014 7.91675 7.50002 7.91675C7.2699 7.91675 7.08335 7.7302 7.08335 7.50008C7.08335 7.26996 7.2699 7.08341 7.50002 7.08341C7.73014 7.08341 7.91669 7.26996 7.91669 7.50008ZM12.9167 12.5001C12.9167 12.7302 12.7301 12.9167 12.5 12.9167C12.2699 12.9167 12.0834 12.7302 12.0834 12.5001C12.0834 12.27 12.2699 12.0834 12.5 12.0834C12.7301 12.0834 12.9167 12.27 12.9167 12.5001ZM18.3334 10.0001C18.3334 14.6025 14.6024 18.3334 10 18.3334C5.39765 18.3334 1.66669 14.6025 1.66669 10.0001C1.66669 5.39771 5.39765 1.66675 10 1.66675C14.6024 1.66675 18.3334 5.39771 18.3334 10.0001Z'
            stroke='currentColor'
            strokeWidth='1.6625'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_4759_6355'>
            <rect width='20' height='20' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default VATExceptionIcon;
