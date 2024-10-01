interface IFileIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
  fill?: string;
}

const FileCheckIcon = ({ className, onClick, color = 'black', fill = 'none' }: IFileIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.6666 10.4165V5.6665C16.6666 4.26637 16.6666 3.56631 16.3941 3.03153C16.1544 2.56112 15.772 2.17867 15.3016 1.93899C14.7668 1.6665 14.0667 1.6665 12.6666 1.6665H7.33328C5.93315 1.6665 5.23309 1.6665 4.69831 1.93899C4.2279 2.17867 3.84545 2.56112 3.60577 3.03153C3.33328 3.56631 3.33328 4.26637 3.33328 5.6665V14.3332C3.33328 15.7333 3.33328 16.4334 3.60577 16.9681C3.84545 17.4386 4.2279 17.821 4.69831 18.0607C5.23309 18.3332 5.93315 18.3332 7.33328 18.3332H9.99995M11.6666 9.1665H6.66662M8.33328 12.4998H6.66662M13.3333 5.83317H6.66662M12.0833 15.8332L13.7499 17.4998L17.4999 13.7498'
        stroke={color}
        strokeWidth='1.6625'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default FileCheckIcon;
