import { Text } from '../atomic';
import { EmptyTableDataIcon } from '../icons';

interface PropsInterface {
  title?: string;
  description?: string;
  isModalTable?: boolean;
  isIdentityTable?: boolean;
  hideImage?: boolean;
}
const EmptyTableBlock = ({
  title,
  description,
  isModalTable,
  isIdentityTable,
  hideImage,
}: PropsInterface) => {
  return (
    <div
      className={` flex flex-row items-center justify-center   ${
        isModalTable ? 'min-h-[500px]' : isIdentityTable ? 'max-h-[300px]' : 'min-h-[60vh]'
      } `}
    >
      <div className='h-full flex flex-col gap-6 items-center justify-center '>
        <EmptyTableDataIcon className={hideImage != true ? `inline-display` : `hidden`} />
        <div className='flex flex-col gap-[0.5rem] items-center '>
          <Text size='xs' weight='bold' type='display' color='#6941C6'>
            {title}
          </Text>
          <Text size='md' type='text' weight='regular' color='#6941C6'>
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default EmptyTableBlock;
