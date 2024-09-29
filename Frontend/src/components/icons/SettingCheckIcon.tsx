interface ISettingCheckIcon {
  className?: string;
  onClick?: () => void;
}
const SettingCheckIcon = ({ className, onClick }: ISettingCheckIcon) => {
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
      <g id='check'>
        <path
          id='Icon'
          d='M16.6667 5L7.50004 14.1667L3.33337 10'
          stroke='#6941C6'
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
    </svg>
  );
};

export default SettingCheckIcon;
