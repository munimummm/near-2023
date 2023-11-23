/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
'use client';
import { useState } from 'react';
import { clsx } from '@near/clsx';
import { useForm, useController, Control } from 'react-hook-form';
import { Icon } from '../icon/Icon';

interface CustomSelectProps {
  name: string;
  control: Control;
  handlesubmit: () => void;
  className: string;
  options?: string[];
  // 더 구체적인 타입 사용이 가능하면 사용하세요 (e.g., Control<FieldValues>)
}

const items = [
  'option1',
  'option2',
  'option3',
  'option4',
  'option5',
  'option6',
  'option7',
];

const gender = ['option1', 'option2', 'option3'];

const CustomDropDownSelect = ({
  name,
  control,
  handlesubmit,
  className,
  options = items,
}: CustomSelectProps) => {
  const {
    field: { ref, onChange, value },
    fieldState,
  } = useController({
    name,
    control,
  });
  const handleItemClick = (selectedValue: any) => {
    onChange(selectedValue);
    handlesubmit();
  };
  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    <ul
      className={clsx(
        'w-[184px] bg-white drop-shadow-md mt-2 rounded-lg',
        className,
      )}
    >
      {options.map((item, index) => {
        return (
          <li
            key={item}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className={clsx(
              'flex justify-between cursor-pointer',
              'py-2 pl-4 pr-[0.875rem] disabled:text-neutral-50 hover:bg-bg-blue1',
              value === item ? 'bg-bg-blue2 text-[#3730A3]' : null,
              index === 0 ? 'rounded-t-lg hover:rounded-t-lg' : null,
              index === options.length - 1
                ? 'rounded-b-lg hover:rounded-b-lg'
                : null,
            )}
            onClick={() => handleItemClick(item)}
          >
            {item}
            {value === item && (
              <Icon icon={'ic_check'} sizes={'xs'} state={'active'} />
            )}
          </li>
        );
      })}
      <input type='hidden' ref={ref} value={value || ''} />
    </ul>
  );
};

const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('20개씩 보기');
  const { handleSubmit, control } = useForm();

  return (
    <>
      <button
        onClick={() => (isVisible ? setIsVisible(false) : setIsVisible(true))}
        className={clsx(
          'rounded-full flex items-center gap-[0.375rem] bg-white px-4 py-2',
          'border border-text-gray',
        )}
      >
        {value}
        <Icon icon={'ic_chevron_down_bold'} sizes={'sm'} state={'bold'} />
      </button>
      <form className='relative'>
        <CustomDropDownSelect
          name={'test'}
          control={control}
          handlesubmit={handleSubmit((data) => {
            setValue(data['test']);
            setIsVisible(false);
            console.log(data);
          })}
          className={isVisible ? 'visible absolute' : 'hidden'}
        />
      </form>
    </>
  );
};

export default Dropdown;
