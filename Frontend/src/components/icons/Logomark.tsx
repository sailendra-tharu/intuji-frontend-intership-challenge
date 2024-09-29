interface ILogomark {
  className?: string;
  onClick?: () => void;
}

const Logomark = ({ className, onClick }: ILogomark) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width='66'
      height='66'
      viewBox='0 0 66 66'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='27' cy='24' r='21' stroke='#6941C6' strokeWidth='6' />
      <circle cx='39' cy='42' r='21' stroke='#6941C6' strokeWidth='6' />
    </svg>
  );
};

export default Logomark;
