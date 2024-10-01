

interface LabelProps {
  title: string;
}

const MenuItemLabel = ({ title }: LabelProps) => {
  return (
    <div className='flex justify-between items-center'>
      {title}
    </div>
  );
};

export default MenuItemLabel;
