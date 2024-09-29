interface IChartIcon {
  className?: string;
  onClick?: () => void;
  color?: string;
}

const ChartIcon = ({ className, onClick, color }: IChartIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='131'
      height='66'
      viewBox='0 0 131 66'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask id='mask0_614_5289' maskUnits='userSpaceOnUse' x='1' y='1' width='129' height='64'>
        <rect
          width='128'
          height='64'
          transform='translate(1.5 1)'
          fill='url(#paint0_linear_614_5289)'
        />
      </mask>
      <g mask='url(#mask0_614_5289)'>
        <path
          opacity='0.2'
          d='M6.10606 57.2759L1.5 65H129.5V1L127.682 12.0345H125.258C124.611 13.8736 123.27 17.5517 123.076 17.5517C122.882 17.5517 121.621 19.7586 121.015 20.8621L115.803 24.1724L112.773 28.5862L107.924 24.1724L105.379 20.8621L101.742 28.5862H97.9848L94.8333 20.8621C93.6212 19.7586 91.1485 17.5517 90.9545 17.5517C90.7606 17.5517 89.1768 15.3448 88.4091 14.2414H86.4697L81.8636 17.5517L77.8636 20.8621L76.0455 28.5862L70.5909 31.8966L67.803 35.2069L64.6515 40.7241L61.6212 47.9655H60.2879L56.6515 48.6552L53.1364 40.7241L50.1061 35.2069H48.2879L45.1364 31.8966L40.6515 35.2069H36.4091L32.1667 40.7241L27.9242 47.3448L24.7727 53.9655L21.3788 57.2759L16.7727 53.9655L13.1364 57.2759L9.5 60.5862L6.10606 57.2759Z'
          fill='#17B26A'
        />
      </g>
      <path
        d='M1.5 65L6.10606 57.2759L9.5 60.5862L13.1364 57.2759L16.7727 53.9655L21.3788 57.2759L24.7727 53.9655L27.9242 47.3448L32.1667 40.7241L36.4091 35.2069H40.6515L45.1364 31.8966L48.2879 35.2069H50.1061L53.1364 40.7241L56.6515 48.6552L60.2879 47.9655H61.6212L64.6515 40.7241L67.803 35.2069L70.5909 31.8966L76.0455 28.5862L77.8636 20.8621L81.8636 17.5517L86.4697 14.2414H88.4091C89.1768 15.3448 90.7606 17.5517 90.9545 17.5517C91.1485 17.5517 93.6212 19.7586 94.8333 20.8621L97.9848 28.5862H101.742L105.379 20.8621L107.924 24.1724L112.773 28.5862L115.803 24.1724L121.015 20.8621C121.621 19.7586 122.882 17.5517 123.076 17.5517C123.27 17.5517 124.611 13.8736 125.258 12.0345H127.682L129.5 1'
        stroke='#17B26A'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <g opacity='0.2'>
        <rect x='76.5' y='5' width='20' height='20' rx='10' stroke='#17B26A' strokeWidth='2' />
      </g>
      <rect x='81.5' y='10' width='10' height='10' rx='5' fill='white' />
      <rect x='81.5' y='10' width='10' height='10' rx='5' stroke='#17B26A' strokeWidth='2' />
      <defs>
        <linearGradient
          id='paint0_linear_614_5289'
          x1='64'
          y1='0'
          x2='64'
          y2='64'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ChartIcon;
