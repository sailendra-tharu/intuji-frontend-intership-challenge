import { TextWrapper } from './Styled';

interface TextProps {
  children: React.ReactNode;
  type?: 'text' | 'display';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: string;
  className?: string;
  onClick?: () => void;
}

const Text = ({
  children,
  type = 'text',
  size = 'md',
  weight = 'regular',
  color,
  className,
  onClick,
}: TextProps) => {
  const mapSizeToClass: any = {
    text: {
      // these are tailwind text size classes
      xs: 'text-[12px] leading-[18px)]',
      sm: 'text-[14px] leading-[20px]',
      md: 'text-[16px] leading-[24px]',
      lg: 'text-[18px] leading-[28px]',
      xl: 'text-[20px] leading-[30px]',
      '2xl': 'text-[24px] leading-[32px]',
      '3xl': 'text-[30px] leading-[36px]',
    },
    display: {
      xs: 'display-text-xs',
      sm: 'display-text-sm',
      md: 'display-text-md',
      lg: 'display-text-lg',
      xl: 'display-text-xl',
      '2xl': 'display-text-2xl',
      '3xl': 'display-text-3xl',
    },
  };

  const mapWeightToClass: any = {
    // these are tailwind text weight classes
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <TextWrapper
      className={`${mapSizeToClass[type][size]} ${mapWeightToClass[weight]} ${className}`}
      color={color}
      onClick={onClick}
    >
      {children}
    </TextWrapper>
  );
};

export default Text;
