import { useNavigate } from 'react-router-dom';

import CustomDataTable from '~/components/Table/DataTable';
import { DataTableHeader } from '~/components/Table/DataTableHeader';

const StaticDataTable = ({
  subTitle,
  subTitleIcon,
  columns,
  data,
  actionsButtons,
  footer,
  path,
}: any) => {
  const navigate = useNavigate();

  const handleClick = (record: any) => {
    navigate(path, {
      state: { record },
    });
  };
  return (
    <div className='w-full h-full'>
      <CustomDataTable
        id='invoice'
        columns={columns}
        data={data ?? columns}
        rowClassName={path ? 'cursor-pointer' : ''}
        onRow={(record: any) => {
          return {
            onClick: () => {
              handleClick(record);
            },
          };
        }}
        footer={() => footer}
        header={() => (
          <DataTableHeader
            subTitle={subTitle}
            subTitleIcon={subTitleIcon}
            actionButtons={actionsButtons}
          />
        )}
      />
    </div>
  );
};
export default StaticDataTable;
