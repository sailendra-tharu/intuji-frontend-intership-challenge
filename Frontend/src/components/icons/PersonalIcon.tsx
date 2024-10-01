interface IPersonalIcon {
  className?: string;
  onClick?: () => void;
}

const PersonalIcon = ({ className, onClick }: IPersonalIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.3333 14C13.3333 13.0696 13.3333 12.6044 13.2185 12.2259C12.9599 11.3736 12.293 10.7067 11.4407 10.4482C11.0622 10.3333 10.597 10.3333 9.66662 10.3333H6.3333C5.40292 10.3333 4.93773 10.3333 4.5592 10.4482C3.70693 10.7067 3.03999 11.3736 2.78145 12.2259C2.66663 12.6044 2.66663 13.0696 2.66663 14M11 5C11 6.65685 9.65681 8 7.99996 8C6.3431 8 4.99996 6.65685 4.99996 5C4.99996 3.34315 6.3431 2 7.99996 2C9.65681 2 11 3.34315 11 5Z'
        stroke='black'
        strokeWidth='1.33'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default PersonalIcon;
