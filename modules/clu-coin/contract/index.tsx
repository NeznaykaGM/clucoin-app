import React from 'react';
// libs
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// components
import { Button } from '@md-ui/button/main';
import { FormInput } from '@md-shared/components/form/controlled/input';
// views
import { From, SuccessfulWrapper, Title, Wrapper } from './views';

// types
interface FormData {
  name: string;
  email: string;
  massage: string;
}

// validation
const schema = yup.object().shape({
  name: yup.string().required('Required').min(2),
  email: yup.string().required('Required').email('Invalid email'),
  message: yup.string()
});

const Contact = () => {
  const [isSuccessful, setIsSuccessful] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = () => {
    setIsLoading(true);
    setIsSuccessful(false);

    setTimeout(() => {
      setIsSuccessful(true);
      setIsLoading(false);

      setTimeout(() => {
        setIsSuccessful(false);
      }, 3000);
    }, 500);
  };

  return (
    <Wrapper>
      <Title>Contact us</Title>

      <From>
        <FormInput name='name' label='Name' control={control} />
        <FormInput label='Email Address' name='email' control={control} />
        <FormInput height={150} name='message' label='Message(optional)' control={control} />
      </From>

      <Button isLoading={isLoading} onClick={handleSubmit(onSubmit)}>
        Submit
      </Button>

      <SuccessfulWrapper isSuccessful={isSuccessful}>Request is successful!</SuccessfulWrapper>
    </Wrapper>
  );
};

export default Contact;
