import { z } from 'zod';
import dayjs from 'dayjs';
import { useState } from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

import { STATUS } from '~/api/enum/enum';
import { ModalStyled } from '~/components/sidebar/Styled';
import { Button, Select, Text } from '~/components/atomic';
import { ControlledField, useRHForm } from '~/components/form';

import { DownloadIcon } from '../icons';
import { DatePicker } from '../atomic/datePicker';

interface ExportModalProps {
  title?: string;
  isModalOpen?: boolean;
  handleCancel: () => void;
  handleSubmit?: any;
  loading?: boolean;
  statusList?: { label: string; value: string }[];
}
const ExportModal = ({
  title,
  isModalOpen,
  handleCancel,
  handleSubmit,
  loading,
  statusList,
}: ExportModalProps) => {
  const { t } = useTranslation();
  const [fromDate, setFromDate] = useState<string>('');
  const [toDate, setToDate] = useState<string>('');
  const nullData = {
    status: STATUS.ALL,
    fromDate: undefined,
    toDate: undefined,
  };
  const {
    Form,
    methods: {
      control,
      formState: { errors },
      reset,
      setValue,
    },
  } = useRHForm({
    initialValues: nullData,
    schema: z.object({
      status: z.string({ required_error: 'Please select status' }).min(1, 'Please select status'),
      fromDate: z.object({}).optional(),
      toDate: z.object({}).optional(),
    }),
  });

  const handleChangeFromDate = (date: any) => {
    const fromDate = dayjs(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
    setValue('fromDate', date);
    setFromDate(fromDate);
  };
  const handleChangeToDate = (date: any) => {
    const toDate = dayjs(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
    setValue('toDate', date);
    setToDate(toDate);
  };

  const onSubmit = (data: any) => {
    const submitData = {
      status: data?.status?.trim(),
      startDate: fromDate,
      endDate: toDate,
    };
    handleSubmit(submitData, reset);
  };
  const handleModalCancel = () => {
    setFromDate('');
    setToDate('');
    reset();
    handleCancel();
  };

  return (
    <ModalStyled
      width={544}
      open={isModalOpen}
      onCancel={handleModalCancel}
      onOk={handleModalCancel}
      centered
      destroyOnClose
      maskClosable={false}
      title={
        <div>
          <Text size='xl' weight='semibold' className='text-[#101828]'>
            {t('exporting')} {title}
          </Text>
        </div>
      }
      footer={false}
    >
      <Form onSubmit={onSubmit} formId='add-type'>
        <div className='flex flex-col gap-3 items-center w-full my-5'>
          <ControlledField
            control={control}
            label={t('filterStatus')}
            name='status'
            required
            errors={errors}
            Component={Select}
            className='w-full'
            componentProps={{
              placeholder: 'Select Status',
              options: statusList,
              disabled: !statusList,
            }}
          />
          <ControlledField
            control={control}
            label={t('startDate')}
            name='fromDate'
            errors={errors}
            Component={DatePicker}
            className='w-full gap-3'
            componentProps={{
              placeholder: format(Date.now(), 'dd/MM/yyyy'),
              format: 'DD/MM/YYYY',
              onChange: (date: any) => handleChangeFromDate(date),
            }}
          />
          <ControlledField
            control={control}
            label={t('endDate')}
            name='toDate'
            errors={errors}
            Component={DatePicker}
            className='w-full gap-3'
            componentProps={{
              placeholder: format(Date.now(), 'dd/MM/yyyy'),
              disabledDate: (current: any) => {
                return dayjs(fromDate) && current && current.valueOf() < dayjs(fromDate);
              },
              format: 'DD/MM/YYYY',
              onChange: (date: any) => handleChangeToDate(date),
            }}
          />
        </div>
      </Form>
      <div className='flex justify-end items-center mt-2 gap-4 w-full'>
        <Button className='w-full' onClick={handleModalCancel}>
          {t('cancel')}
        </Button>
        <Button
          type='primary'
          key='submit'
          form='add-type'
          className='w-full'
          htmlType='submit'
          loading={loading}
          disabled={loading}
        >
          <DownloadIcon color='currentColor' /> {t('download')}
        </Button>
      </div>
    </ModalStyled>
  );
};

export default ExportModal;
