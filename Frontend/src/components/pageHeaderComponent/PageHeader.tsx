import { CardTagStyled, PageHeaderWrapper } from './Styled';

import { Button, Text } from '../atomic';
import {
  AddButtonIcon,
  ExportIcon,
  ForwardIcon,
  MailIcon,
  PendingButtonIcon,
  PrintIcon,
} from '../icons';

interface PageHeaderProps {
  title: string;
  count: string;
  addButtonTitle?: string;
  handlePendingRequest?: () => void;
  handleAdd?: () => void;
  enablePendingRequestButton?: boolean;
  enableExportButton?: boolean;
  enableMailButton?: boolean;
  enablePrintButton?: boolean;
  onClick?: () => void;
}
const PageHeader = ({
  title,
  count,
  addButtonTitle,
  enableExportButton,
  handlePendingRequest,
  enablePendingRequestButton,
  enableMailButton,
  enablePrintButton,
  onClick,
}: PageHeaderProps) => {
  return (
    <PageHeaderWrapper>
      <div className='flex flex-row gap-2 items-center'>
        <Text type='text' size='lg' weight='semibold'>
          {title}
        </Text>
        <CardTagStyled className='flex items-center justify-center'>
          <Text type='text' size='sm' weight='medium' color='#0029C2'>
            {count}
          </Text>
        </CardTagStyled>
      </div>
      <div className='flex gap-4'>
        {enablePrintButton && (
          <Button className='flex gap-1 py-3 px-[27.5px]'>
            <PrintIcon />
            <Text type='text' className='text-[#344054] ' weight='semibold' size='md'>
              Print
            </Text>
          </Button>
        )}

        {enableExportButton && (
          <Button className='flex gap-1 '>
            <ExportIcon />
            <Text type='text' className='text-[#344054]' weight='semibold' size='md'>
              Export
            </Text>
          </Button>
        )}
        {enablePendingRequestButton && (
          <Button
            icon={<PendingButtonIcon />}
            className='flex  justify-center items-center gap-1 '
            onClick={handlePendingRequest}
          >
            <Text type='text' className='text-[#344054]' weight='semibold' size='md'>
              Pending Request
            </Text>
            <ForwardIcon color='#344054' />
          </Button>
        )}
        {enableMailButton && (
          <Button className='flex gap-1 px-[27.5px]'>
            <MailIcon />
            <Text type='text' className='text-[#344054]' weight='semibold' size='md'>
              Mail
            </Text>
          </Button>
        )}

        {addButtonTitle && (
          <Button
            className='flex gap-1'
            type='primary'
            htmlType='submit'
            data-test-id='add-btn'
            onClick={onClick}
          >
            <AddButtonIcon />
            <Text type='text' className='text-[#ffffff]' weight='semibold' size='md'>
              {addButtonTitle}
            </Text>
          </Button>
        )}
      </div>
    </PageHeaderWrapper>
  );
};

export default PageHeader;
