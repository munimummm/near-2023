import { useState, useEffect } from 'react';
import { DatePicker } from '@near/react-datepicker';
import { getYear, getMonth } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { Tag, TextInput } from 'ui';
import { useForm } from '@near/react-hook-form';
import { ko } from 'date-fns/esm/locale';

interface DatepickerProps {
  birth?: string;
}

const DatepickerHeader = () => {
  const _ = require('lodash');

  const { control, setValue } = useForm<DatepickerProps>({
    defaultValues: {
      birth: '',
    },
    mode: 'onChange',
  });

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [datePicker, setDatePicker] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const years = _.range(1930, getYear(new Date()) + 1, 1);
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  const onClickDatePicker = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDatePicker(!datePicker);
  };

  useEffect(() => {
    const onChangebirth = () => {
      const date = selectedDate;
      const year = date?.getFullYear();
      const month = Number(date?.getMonth()) + 1;
      const day = date?.getDate();
      const value = year + '.' + month + '.' + day;

      setValue('birth', value);
    };
    onChangebirth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  return (
    <div className='flex justify-between w-full'>
      <TextInput
        control={control}
        placeholder='yyyy-mm-dd'
        borderRadius={true}
        name={'birth'}
        rules={{ required: true }}
      />
      <Tag
        mode='gray'
        handleTagClick={onClickDatePicker}
        className='mobile:w-[4.375rem] mobile:h-[2.1875rem] ml-[0.9375rem] tablet:w-[6.25rem]'
      >
        선택
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
              {'<'}
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
              {'>'}
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
        locale={ko}
      />
    </div>
  );
};

export default DatepickerHeader;
