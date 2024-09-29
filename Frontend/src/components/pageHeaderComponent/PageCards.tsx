import { PageCardWrapper } from './Styled';

import { Text } from '../atomic';

interface CardProps {
  title?: string;
  icon?: React.ReactNode;
  num?: number | string;
  type?: string;
  iconName?: string;
}
const PageCard = ({ icon, title, num }: CardProps) => {
  const formattedNum = num?.toLocaleString('en-US');
  return (
    <PageCardWrapper>
      <div className='flex justify-between w-full'>
        <div className='flex items-center gap-6'>
          {icon}
          <div className=' flex items-start justify-center flex-col'>
            <Text type='text' size='md' weight='medium' color='#344054'>
              {title}
            </Text>
            <Text type='display' size='sm' weight='semibold' color='#101828'>
              {formattedNum}
            </Text>
          </div>
        </div>
      </div>
    </PageCardWrapper>
  );
};

export default PageCard;
