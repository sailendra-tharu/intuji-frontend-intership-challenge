interface ICheckCircleIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const CheckCircleIcon = ({ className, onClick, color }: ICheckCircleIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='56'
      height='56'
      viewBox='0 0 56 56'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='56' height='56' rx='28' fill='#DBFAE6' />
      <path
        d='M38 27.0857V28.0057C37.9988 30.1621 37.3005 32.2604 36.0093 33.9875C34.7182 35.7147 32.9033 36.9782 30.8354 37.5896C28.7674 38.201 26.5573 38.1276 24.5345 37.3803C22.5117 36.633 20.7847 35.2518 19.611 33.4428C18.4373 31.6338 17.8798 29.4938 18.0217 27.342C18.1636 25.1903 18.9972 23.1421 20.3983 21.5028C21.7994 19.8635 23.6928 18.7211 25.7962 18.2459C27.8996 17.7706 30.1003 17.9881 32.07 18.8657M38 20L28 30.01L25 27.01'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CheckCircleIcon;
