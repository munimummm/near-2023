import React from 'react';
import { Decorator, StoryFn } from '@storybook/react';
import { useForm, FormProvider } from '@near/react-hook-form';

export const FormDecorator: Decorator = (Story: StoryFn, context) => {
  const methods = useForm();
  const { control } = methods;
  return (
    <FormProvider {...methods}>
      <Story {...(context, control)} />
    </FormProvider>
  );
};
