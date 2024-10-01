import { ConfigProvider } from 'antd';
import { TableRowSelection } from 'antd/es/table/interface';

import { TableStyled } from './Style';
import EmptyTableBlock from './EmptyTableBlock';

interface DataTableProps {
  ref?: any;
  data?: any[];
  onRow?: any;
  header?: any;
  footer?: any;
  columns?: any;
  onChange?: React.ChangeEvent<HTMLInputElement> | any;
  loading?: boolean;
  rowClassName?: string | undefined;
  emptyTableData?: any;
  rowSelection?: TableRowSelection<object> | any;
  style?: Record<string, any>;
  isIdentityTable?: boolean;
  scroll?: any;
  id?: string | undefined;
  expandable?: any;
}

const CustomDataTable = ({
  columns,
  data = [],
  rowSelection,
  emptyTableData,
  loading = false,
  rowClassName = '',
  expandable,
  header = undefined,
  footer = undefined,
  onChange = undefined,
  onRow = undefined,
  style = undefined,
  isIdentityTable = true,
  scroll = undefined,
  id = '',
  ref,
}: DataTableProps) => {
  const showColumns = data && data.length > 0;
  return (
    <ConfigProvider
      renderEmpty={() => (
        <EmptyTableBlock isIdentityTable={isIdentityTable} hideImage {...emptyTableData} />
      )}
    >
      <TableStyled
        ref={ref}
        onRow={onRow}
        rowSelection={data?.length > 0 && rowSelection}
        title={header}
        dataSource={data}
        loading={loading}
        expandable={expandable}
        onChange={onChange}
        pagination={false}
        rowClassName={rowClassName}
        style={style}
        footer={showColumns ? footer : undefined}
        columns={showColumns ? (columns as any) : undefined}
        scroll={scroll}
        id={id}
      />
    </ConfigProvider>
  );
};

export default CustomDataTable;
