interface IProductIcon {
  className?: string;
  onClick?: () => void;
}

const ProductIcon = ({ className, onClick }: IProductIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 12.2L11.6422 17.0211C11.7734 17.0867 11.839 17.1195 11.9078 17.1324C11.9687 17.1439 12.0313 17.1439 12.0922 17.1324C12.161 17.1195 12.2266 17.0867 12.3578 17.0211L22 12.2M2 17.2L11.6422 22.0211C11.7734 22.0867 11.839 22.1195 11.9078 22.1324C11.9687 22.1439 12.0313 22.1439 12.0922 22.1324C12.161 22.1195 12.2266 22.0867 12.3578 22.0211L22 17.2M2 7.20002L11.6422 2.3789C11.7734 2.31331 11.839 2.28052 11.9078 2.26761C11.9687 2.25618 12.0313 2.25618 12.0922 2.26761C12.161 2.28052 12.2266 2.31331 12.3578 2.3789L22 7.20002L12.3578 12.0211C12.2266 12.0867 12.161 12.1195 12.0922 12.1324C12.0313 12.1439 11.9687 12.1439 11.9078 12.1324C11.839 12.1195 11.7734 12.0867 11.6422 12.0211L2 7.20002Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ProductIcon;
