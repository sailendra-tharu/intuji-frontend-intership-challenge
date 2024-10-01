interface IGeneralSettingIcon {
  className?: string;
  onClick?: () => void;
}

const GeneralSettingIcon = ({ className, onClick }: IGeneralSettingIcon) => {
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
        d='M12.5421 7.5H4.58333C3.43274 7.5 2.5 6.56726 2.5 5.41667C2.5 4.26607 3.43274 3.33333 4.58333 3.33333H12.5421M7.45791 16.6667H15.4167C16.5673 16.6667 17.5 15.7339 17.5 14.5833C17.5 13.4327 16.5673 12.5 15.4167 12.5H7.45791M2.5 14.5833C2.5 16.1942 3.80584 17.5 5.41667 17.5C7.0275 17.5 8.33333 16.1942 8.33333 14.5833C8.33333 12.9725 7.0275 11.6667 5.41667 11.6667C3.80584 11.6667 2.5 12.9725 2.5 14.5833ZM17.5 5.41667C17.5 7.0275 16.1942 8.33333 14.5833 8.33333C12.9725 8.33333 11.6667 7.0275 11.6667 5.41667C11.6667 3.80584 12.9725 2.5 14.5833 2.5C16.1942 2.5 17.5 3.80584 17.5 5.41667Z'
        stroke='#475467'
        stroke-width='1.66667'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default GeneralSettingIcon;
