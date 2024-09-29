import { Controller, useController } from 'react-hook-form';
import { ErrorLabel, Label } from '../atomic';

interface TControlledField {
  rules?: any;
  id?: string;
  control: any;
  errors?: any;
  name: string;
  Component: any;
  label?: string;
  required?: boolean;
  isInvalid?: boolean;
  componentProps?: any;
  className?: string;
}

export default function ControlledField({
  id,
  name,
  label,
  rules,
  control,
  required,
  Component,
  className,
  isInvalid,

  componentProps,
}: TControlledField) {
  const { fieldState } = useController({
    name,
    control,
  });
  const hasError = !!fieldState.error || isInvalid;
  const errorMsg = hasError ? fieldState.error?.message : '';
  return (
    <div
      className={`flex flex-col gap-1.5 ${className}`}
      data-test-id={`${name}-controlled-wrapper`}
    >
      {label && (
        <Label id={id || name} required={required}>
          {label}
        </Label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => {
          return (
            <Component
              data-test-id={`${name}-test-field`}
              {...field}
              {...componentProps}
              status={hasError && 'error'}
            />
          );
        }}
      />
      {hasError && <ErrorLabel>{errorMsg}</ErrorLabel>}
    </div>
  );
}
