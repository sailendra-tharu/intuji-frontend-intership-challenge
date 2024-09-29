interface IDollorIcon {
  className?: string;
  onClick?: any;
}

const DollorIcon = ({ className, onClick }: IDollorIcon) => {
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
        d='M9.99996 14.1667C9.99996 16.4679 11.8654 18.3333 14.1666 18.3333C16.4678 18.3333 18.3333 16.4679 18.3333 14.1667C18.3333 11.8655 16.4678 10 14.1666 10C11.8654 10 9.99996 11.8655 9.99996 14.1667ZM9.99996 14.1667C9.99996 13.2285 10.31 12.3627 10.8333 11.6663V4.16667M9.99996 14.1667C9.99996 14.8545 10.1666 15.5033 10.4617 16.0751C9.75968 16.6681 8.13816 17.0833 6.24996 17.0833C3.71865 17.0833 1.66663 16.3371 1.66663 15.4167V4.16667M10.8333 4.16667C10.8333 5.08714 8.78126 5.83333 6.24996 5.83333C3.71865 5.83333 1.66663 5.08714 1.66663 4.16667M10.8333 4.16667C10.8333 3.24619 8.78126 2.5 6.24996 2.5C3.71865 2.5 1.66663 3.24619 1.66663 4.16667M1.66663 11.6667C1.66663 12.5871 3.71865 13.3333 6.24996 13.3333C8.07413 13.3333 9.64939 12.9458 10.3872 12.3848M10.8333 7.91667C10.8333 8.83714 8.78126 9.58333 6.24996 9.58333C3.71865 9.58333 1.66663 8.83714 1.66663 7.91667'
        stroke='#475467'
        strokeWidth='2.08333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default DollorIcon;
