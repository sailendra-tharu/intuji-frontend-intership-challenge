import { ForwardIcon } from '../icons';

interface LabelProps {
  title: string;
}

const MenuItemLabel = ({ title }: LabelProps) => {
  return (
    <div className='flex justify-between items-center'>
      {title}
      <ForwardIcon />
    </div>
  );
};

export default MenuItemLabel;
