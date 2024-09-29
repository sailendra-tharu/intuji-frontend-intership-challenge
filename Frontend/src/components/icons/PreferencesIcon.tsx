interface IPreferencesIcon {
  className?: string;
  onClick?: () => void;
}

const PreferencesIcon = ({ className, onClick }: IPreferencesIcon) => {
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
        d='M10.0337 6H3.66667C2.74619 6 2 5.25381 2 4.33333C2 3.41286 2.74619 2.66667 3.66667 2.66667H10.0337M5.96633 13.3333H12.3333C13.2538 13.3333 14 12.5871 14 11.6667C14 10.7462 13.2538 10 12.3333 10H5.96633M2 11.6667C2 12.9553 3.04467 14 4.33333 14C5.622 14 6.66667 12.9553 6.66667 11.6667C6.66667 10.378 5.622 9.33333 4.33333 9.33333C3.04467 9.33333 2 10.378 2 11.6667ZM14 4.33333C14 5.622 12.9553 6.66667 11.6667 6.66667C10.378 6.66667 9.33333 5.622 9.33333 4.33333C9.33333 3.04467 10.378 2 11.6667 2C12.9553 2 14 3.04467 14 4.33333Z'
        stroke='black'
        strokeWidth='1.33'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default PreferencesIcon;