import React from 'react';
interface ITopSellingIcon {
  className?: string;
  onClick?: () => void;
}
const TopSellingIcon = ({ className, onClick }: ITopSellingIcon) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      className={className}
      onClick={onClick}
    >
      <path
        d='M18.3346 5.8335L11.7774 12.3907C11.4474 12.7207 11.2824 12.8857 11.0922 12.9475C10.9248 13.0019 10.7445 13.0019 10.5771 12.9475C10.3868 12.8857 10.2218 12.7207 9.89183 12.3907L7.61078 10.1096C7.28076 9.77962 7.11576 9.61462 6.92548 9.55279C6.75811 9.49841 6.57782 9.49841 6.41045 9.55279C6.22018 9.61462 6.05517 9.77962 5.72516 10.1096L1.66797 14.1668M18.3346 5.8335H12.5013M18.3346 5.8335V11.6668'
        stroke='#475467'
        stroke-width='2.08333'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default TopSellingIcon;
