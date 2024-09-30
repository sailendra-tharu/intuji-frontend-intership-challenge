import { z } from 'zod';
import { Button } from 'antd';

import { Modal } from './Styled';

import { Text } from '../atomic';
import { TextAreaInput } from '../atomic/input';
import { ControlledField, useRHForm } from '../form';

const RejectModalSchema = z.object({
  remark: z.string({ required_error: 'Remark is required' }).min(1, 'Remark is required'),
});

interface RejectModalProps {
  title?: string;
  isModalOpen: boolean;
  handleCancel?: () => void;
  handleReject?: any;
  loading?: boolean;
  initials?: any;
  id?: number;
}
const RejectModal = ({
  title,
  isModalOpen,
  handleCancel,
  handleReject,
  loading,
  
}: RejectModalProps) => {
  const rejectHandler = (data: any) => {
    handleReject(data);
  };
  const {
    Form,
    methods: {
      control,
      formState: { errors },
    },
  } = useRHForm({
    initialValues: {},
    schema: RejectModalSchema,
  });
  return (
    <Modal
      centered
      style={{ maxWidth: '500px' }}
      title={
        <div className='flex flex-col gap-1'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              <Text weight='semibold' size='lg' type='text'>
                Reject Client
              </Text>
              <Text type='text' size='sm' weight='regular' className='text-[#475467]'>
                Are you sure you want to reject this {title}? This action cannot be undone.
              </Text>
              <Form onSubmit={rejectHandler} formId='reject-client' className='w-full'>
                <div className='flex flex-col gap-3 items-center w-full my-5'>
                  <ControlledField
                    control={control}
                    label='Remark*'
                    name='remark'
                    errors={errors}
                    Component={TextAreaInput}
                    className='w-full'
                  />
                </div>
              </Form>
            </div>
          </div>
        </div>
      }
      open={isModalOpen}
      onOk={handleCancel}
      destroyOnClose={true}
      onCancel={handleCancel}
      footer={
        <div className='flex flex-row gap-3 mt-8 w-full'>
          <Button size='large' key='back' onClick={handleCancel} style={{ width: '100%' }}>
            <Text weight='semibold' size='md' type='text' color='#344054'>
              Cancel
            </Text>
          </Button>
          <Button
            form='reject-client'
            id='reject-client'
            key='submit'
            size='large'
            htmlType='submit'
            disabled={loading}
            loading={loading}
            style={{
              color: '#FFF',
              background: '#F04438',
              border: '1px solid #F04438',
              width: '100%',
            }}
          >
            <Text weight='semibold' size='md' type='text' color='#FFF'>
              Reject
            </Text>
          </Button>
        </div>
      }
    ></Modal>
  );
};

export default RejectModal;
