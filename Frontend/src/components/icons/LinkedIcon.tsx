interface ILinkedIcon {
  className?: string;
  onClick?: () => void;
}

const LinkedIcon = ({ className, onClick }: ILinkedIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.5896 15.3034L9.4111 16.4819C7.78392 18.1091 5.14573 18.1091 3.51855 16.4819C1.89136 14.8547 1.89136 12.2165 3.51855 10.5893L4.69706 9.4108M15.3037 10.5893L16.4822 9.4108C18.1094 7.78361 18.1094 5.14542 16.4822 3.51824C14.855 1.89106 12.2168 1.89106 10.5896 3.51824L9.4111 4.69675M7.08369 12.9167L12.917 7.08337'
        stroke='currentColor'
        strokeWidth='1.6625'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LinkedIcon;
