import { useState, useEffect } from 'react';
import { DatePicker } from '@near/react-datepicker';
import { getYear, getMonth } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { Tag, TextInput } from 'ui';
import { useForm } from '@near/react-hook-form';
import { clsx } from '@near/clsx';
interface CalenderProps {
  TagName: string;
  className?: string;
  name: string;
}
export default function Calendar({ ...props }: CalenderProps) {
  const lodash = require('lodash');

  const { control, setValue } = useForm({
    mode: 'onChange',
  });
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [datePicker, setDatePicker] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const years = lodash.range(2000, getYear(new Date()) + 1, 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const onClickDatePicker = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDatePicker(!datePicker);
  };
  useEffect(() => {
    const onChangeDatePicker = () => {
      const date = selectedDate;
      const year = date?.getFullYear();
      const month = Number(date?.getMonth()) + 1;
      const day = date?.getDate();
      const value = year + '.' + month + '.' + day;

      setValue('birth', value);
    };
    onChangeDatePicker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);
  return (
    <div className={clsx('flex justify-between', props.className)}>
      <TextInput
        control={control}
        placeholder='yyyy-mm-dd'
        borderRadius={true}
        name={props.name}
        rules={{ required: true }}
      />
      <Tag
        mode='gray'
        handleTagClick={onClickDatePicker}
        className='mobile:w-[4.375rem] mobile:h-[2.1875rem] ml-[0.9375rem] tablet:w-[6.25rem]'
      >
        {props.TagName}
      </Tag>
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {'< '}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(Number(value))}
            >
              {years.map((option: any) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {'> '}
            </button>
          </div>
        )}
        selected={startDate}
        popperPlacement='top-start'
        onChange={(date) => {
          setStartDate(date);
          setSelectedDate(date);
        }}
        open={datePicker}
      />
    </div>
  );
}
