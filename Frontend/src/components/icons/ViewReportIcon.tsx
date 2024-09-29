interface ViewReportIcon {
  className?: string;
  onClick?: () => void;
}

const ViewReportIcon = ({ className, onClick }: ViewReportIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='19'
      height='18'
      viewBox='0 0 19 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.5 1.5C10.4849 1.5 11.4602 1.69399 12.3701 2.0709C13.2801 2.44781 14.1069 3.00026 14.8033 3.6967C15.4997 4.39314 16.0522 5.21994 16.4291 6.12988C16.806 7.03982 17 8.01509 17 9.00001M9.5 1.5V9M9.5 1.5C5.35786 1.5 2 4.85786 2 9C2 13.1421 5.35786 16.5 9.5 16.5C13.6421 16.5 17 13.1421 17 9.00001M9.5 1.5C13.6421 1.5 17 4.85787 17 9.00001M17 9.00001L9.5 9M17 9.00001C17 10.1836 16.7199 11.3504 16.1825 12.4049C15.6452 13.4595 14.8659 14.3719 13.9084 15.0676L9.5 9'
        stroke='#667085'
        strokeWidth='1.67'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default ViewReportIcon;
