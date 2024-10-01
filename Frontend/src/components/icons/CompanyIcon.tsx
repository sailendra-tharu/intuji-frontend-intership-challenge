interface ICompanyIcon {
  className?: string;
  onClick?: () => void;
}

const CompanyIcon = ({ className, onClick }: ICompanyIcon) => {
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
        d='M5.00004 7.33333H3.06671C2.69334 7.33333 2.50665 7.33333 2.36405 7.406C2.23861 7.46991 2.13662 7.5719 2.0727 7.69734C2.00004 7.83995 2.00004 8.02663 2.00004 8.4V14M11 7.33333H12.9334C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7615 7.46991 13.8635 7.5719 13.9274 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7269 2.47713 10.5229 2.27316 10.272 2.14532C9.98681 2 9.61344 2 8.86671 2H7.13337C6.38664 2 6.01327 2 5.72805 2.14532C5.47717 2.27316 5.2732 2.47713 5.14537 2.72801C5.00004 3.01323 5.00004 3.3866 5.00004 4.13333V14M14.6667 14H1.33337M7.33337 4.66667H8.66671M7.33337 7.33333H8.66671M7.33337 10H8.66671'
        stroke='black'
        strokeWidth='1.33'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CompanyIcon;
