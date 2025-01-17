interface IDisputeIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
  fill?: string;
}
const DisputeIcon = ({ className, onClick, color, fill }: IDisputeIcon) => {
  return (
    <svg
      width='56'
      height='56'
      viewBox='0 0 56 56'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
    >
      <rect width='56' height='56' rx='28' fill={fill ?? '#FEE4E2'} />
      <path
        d='M28 26.5V23M28 30H28.01M23 34V36.3355C23 36.8684 23 37.1348 23.1092 37.2716C23.2042 37.3906 23.3483 37.4599 23.5005 37.4597C23.6756 37.4595 23.8837 37.2931 24.2998 36.9602L26.6852 35.0518C27.1725 34.662 27.4162 34.4671 27.6875 34.3285C27.9282 34.2055 28.1844 34.1156 28.4492 34.0613C28.7477 34 29.0597 34 29.6837 34H32.2C33.8802 34 34.7202 34 35.362 33.673C35.9265 33.3854 36.3854 32.9265 36.673 32.362C37 31.7202 37 30.8802 37 29.2V23.8C37 22.1198 37 21.2798 36.673 20.638C36.3854 20.0735 35.9265 19.6146 35.362 19.327C34.7202 19 33.8802 19 32.2 19H23.8C22.1198 19 21.2798 19 20.638 19.327C20.0735 19.6146 19.6146 20.0735 19.327 20.638C19 21.2798 19 22.1198 19 23.8V30C19 30.93 19 31.395 19.1022 31.7765C19.3796 32.8117 20.1883 33.6204 21.2235 33.8978C21.605 34 22.07 34 23 34Z'
        stroke={color ?? '#D92D20'}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default DisputeIcon;
