interface IPrintIcon {
  className?: string;
  onClick?: () => void;
}

const PrintIcon = ({ className, onClick }: IPrintIcon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.5 7V5.2C18.5 4.0799 18.5 3.51984 18.282 3.09202C18.0903 2.71569 17.7843 2.40973 17.408 2.21799C16.9802 2 16.4201 2 15.3 2H9.7C8.5799 2 8.01984 2 7.59202 2.21799C7.21569 2.40973 6.90973 2.71569 6.71799 3.09202C6.5 3.51984 6.5 4.0799 6.5 5.2V7M6.5 18C5.57003 18 5.10504 18 4.72354 17.8978C3.68827 17.6204 2.87962 16.8117 2.60222 15.7765C2.5 15.395 2.5 14.93 2.5 14V11.8C2.5 10.1198 2.5 9.27976 2.82698 8.63803C3.1146 8.07354 3.57354 7.6146 4.13803 7.32698C4.77976 7 5.61984 7 7.3 7H17.7C19.3802 7 20.2202 7 20.862 7.32698C21.4265 7.6146 21.8854 8.07354 22.173 8.63803C22.5 9.27976 22.5 10.1198 22.5 11.8V14C22.5 14.93 22.5 15.395 22.3978 15.7765C22.1204 16.8117 21.3117 17.6204 20.2765 17.8978C19.895 18 19.43 18 18.5 18M15.5 10.5H18.5M9.7 22H15.3C16.4201 22 16.9802 22 17.408 21.782C17.7843 21.5903 18.0903 21.2843 18.282 20.908C18.5 20.4802 18.5 19.9201 18.5 18.8V17.2C18.5 16.0799 18.5 15.5198 18.282 15.092C18.0903 14.7157 17.7843 14.4097 17.408 14.218C16.9802 14 16.4201 14 15.3 14H9.7C8.5799 14 8.01984 14 7.59202 14.218C7.21569 14.4097 6.90973 14.7157 6.71799 15.092C6.5 15.5198 6.5 16.0799 6.5 17.2V18.8C6.5 19.9201 6.5 20.4802 6.71799 20.908C6.90973 21.2843 7.21569 21.5903 7.59202 21.782C8.01984 22 8.57989 22 9.7 22Z'
        stroke='#475467'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default PrintIcon;
