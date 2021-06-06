import * as React from 'react';
// libs
import { Control, Controller } from 'react-hook-form';
// components
import { Input, InputProps } from '@md-shared/components/form/input';

export interface FormTextFieldProps extends InputProps {
  control: Control<any>;
  name: string;
}

const FormInput: React.FC<FormTextFieldProps> = ({ control, name, ...rest }) => {
  return (
    <Controller
      control={control}
      defaultValue=''
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Input
          errorText={error?.message}
          onChange={(e) => field.onChange(e.target.value)}
          value={field.value}
          {...rest}
        />
      )}
    />
  );
};

export { FormInput };
