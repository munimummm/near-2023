/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
'use client';
import { useState } from 'react';
import { clsx } from '@near/clsx';
import {
  useController,
  Control,
  UseControllerProps,
  FieldValues,
} from '@near/react-hook-form';
import { Icon } from '../icon/Icon';

const LOCAL = ['모든 지역', '서울특별시'];
const SHOWLIST = ['5개씩 보기', '10개씩 보기', '15개씩 보기', '20개씩 보기'];

/**
 *
 * @author `최지연`
 * @description 데이터 전달용 DropDown UI 컴포넌트
 * @param name
 * react-hook-form 데이터 전달시 사용할 키(key)값.
 *
 * @param control
 * @param handelsubmit
 * -  useForm에서 handleSubmit를 객체 분해 할당으로 꺼내 와 함수 작성하면 됨
 * @example
 *  additionalHandleSubmit={handleSubmit((data) => {
          console.log(data);
        })}
 * @param arrayType
 * - 해당 컴포넌트를 사용하는 부분은 지역 리스트업과,리스트 n개씩 보여주기 밖에 없음.
 * - 그렇기에 arrayType 열거형으로 선택하게 설정함.
 * - MVP 단계에서 서울권만 보호소가 리스트업이 됨.
 * - n개씩 보기는 임의로 5의 배수로 작성했음.
 * - `LOCAL` - 보호소 지역 리스트업
 * - `SHOWLIST` - n개씩 게시물 보여주기
 */

interface CustomSelectProps extends UseControllerProps {
  name: string;
  control?: Control<FieldValues>;
  additionalHandleSubmit: () => void;
  className?: string;
  arrayType: 'LOCAL' | 'SHOWLIST';
}

const arrayGroup = {
  LOCAL: LOCAL,
  SHOWLIST: SHOWLIST,
};

const Dropdown = (props: CustomSelectProps) => {
  const {
    control,
    name = '',
    additionalHandleSubmit,
    className,
    arrayType = 'LOCAL',
  } = props;
  const {
    field: { ref, onChange, value },
  } = useController({
    name: name,
    control: control,
    defaultValue: arrayGroup[arrayType][0],
  });
  const [isVisible, setIsVisible] = useState(false);
  const [values, setValue] = useState(arrayGroup[arrayType][0]);

  const handleItemClick = (selectedValue: string) => {
    onChange(selectedValue);
    setIsVisible(false);
    setValue(selectedValue);
    additionalHandleSubmit();
  };
  return (
    <>
      <button
        onClick={() => (isVisible ? setIsVisible(false) : setIsVisible(true))}
        className={clsx(
          'rounded-full flex items-center justify-between gap-[0.375rem] bg-white px-4 py-2',
          'border border-text-gray',
          className,
        )}
      >
        {values}
        <Icon icon={'ic_chevron_down_bold'} sizes={'sm'} state={'bold'} />
      </button>

      <form className='relative'>
        <ul
          className={clsx(
            'w-[184px] bg-white drop-shadow-md mt-2 rounded-lg absolute',
          )}
        >
          {arrayGroup[arrayType].map((item, index) => {
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <li
                key={item}
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex={0}
                className={clsx(
                  isVisible ? 'visible' : 'hidden',
                  'flex justify-between cursor-pointer',
                  'py-2 pl-4 pr-[0.875rem] disabled:text-neutral-50 hover:bg-bg-blue1',
                  value === item
                    ? 'bg-bg-blue2 text-[#3730A3] pointer-events-none'
                    : null,
                  index === 0 ? 'rounded-t-lg hover:rounded-t-lg' : null,
                  index === arrayGroup[arrayType].length - 1
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
      </form>
    </>
  );
};

export default Dropdown;
