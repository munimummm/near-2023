import React from 'react';
import { Decorator, StoryFn } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';

export const FormDecorator: Decorator = (Story: StoryFn) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Story />
    </FormProvider>
  );
};
