'use client';

import { useState } from 'react';
import { useForm } from '@near/react-hook-form';
import { ButtonXL } from 'ui/components/buttons/Button';
import CheckBox from 'ui/components/checkbox/Checkbox';
import Dropdown from 'ui/components/dropdown/Dropdown';
import FooterShadowBox from 'ui/components/footer/FooterShadowBox';
import Logo from 'ui/components/logo/Logo';
import Tag from 'ui/components/tags/Tag';
import TextInput from 'ui/components/textinput/TextInput';
import { DatePicker } from '@near/react-datepicker';
import './datepicker/datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal } from '@near/antd';
import { DaumPostcode } from '@near/react-daum-postcode';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SignupProps, handleSignUp } from '@near/apis';

const userData: SignupProps = {
  email: 'near_testttt@near.com',
  password: 'rkskek123!!!!',
  role: 'normal_user',
  normal_data: {
    name: 'test',
    phone: 'test',
    shelter_address: 'test',
    shelter_detail_address: 'test',
    shelter_type: 'test',
    shelter_scale: 'test',
    ceo_name: 'test',
    marketing_agree: false,
    shelter_cooperation: false,
    register_number: 'test',
  },
};
() => handleSignUp(userData);

interface FormValues {
  birth?: string;
  email?: string;
  password?: string | undefined;
  pwcheck?: string;
  name?: string;
  phone?: string;
  address?: string;
  detail?: string;
  all?: boolean;
  member?: boolean;
  site?: boolean;
  marketing?: boolean;
  info?: boolean;
  role?: 'shelter_user' | 'normal_user';
  gender?: string;
}

const SignupClient = () => {
  const supabase = createClientComponentClient();
  const { handleSubmit, control, setValue, getValues } = useForm<FormValues>({
    defaultValues: {
      birth: '',
      email: '',
      password: '',
      pwcheck: '',
      name: '',
      phone: '',
      address: '',
      detail: '',
      all: false,
      member: false,
      site: false,
      marketing: false,
      info: false,
    },
    mode: 'onChange',
  });

  const genderOptions: string[] = ['남성', '여성'];

  const [gender, setGender] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [datePicker, setDatePicker] = useState(false);
  const [message, setMessage] = useState<string>('');
  // const [pwMessage, setPwMessage] = useState<string>("")
  const [messageOpen, setMessageOpen] = useState(false);
  const [pwcheckmsg, setPkcheckmsg] = useState<string>('');
  const [passwordOpen, setPasswordOpen] = useState(false);

  // const [checkList, setCheckList] = useState<string[]>([]);

  const fetchProfile = async () => {
    setMessageOpen(true);
    try {
      let { data: user_email_list } = await supabase
        .from('user_email_list')
        .select('*');

      const emailList = user_email_list;
      const inputEmail: string = getValues('email')!;
      const emailCheck = emailList?.map((idx) => {
        return idx.user_email;
      });

      if (`${emailCheck}` === inputEmail) {
        setMessage('이미 존재하는 아이디입니다.');
      } else if (getValues('email') === '') {
        setMessage('아이디를 입력하세요');
      } else if (!/\w+@\w+\.\w+/.test(inputEmail)) {
        setMessage('올바른 형식에 맞게 작성해 주세요');
      } else {
        setMessage('사용 가능한 아이디입니다.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 비밀번호 체크 함수
  const passwordValidation = () => {
    setPasswordOpen(true);
    const inputPassword: string = getValues('password')!;
    const passwordCheck: string = getValues('pwcheck')!;

    if (inputPassword !== passwordCheck) {
      setPkcheckmsg('입력하신 비밀번호가 다릅니다.');
    } else {
      setPkcheckmsg('입력하신 비밀번호가 같습니다.');
    }
  };

  const genderOption = () => {
    setDropdown(true);
  };

  const onClickSubmit = async () => {
    try {
      handleSignUp(userData);
    } catch (error) {
      console.log(error);
    }
  };

  // 달력 입력
  const onClickDatePicker = () => {
    setDatePicker(!datePicker);
  };

  const onChangebirth = () => {
    const date = selectedDate;
    const year = date?.getFullYear();
    const month = Number(date?.getMonth()) + 1;
    const day = date?.getDate();
    const value = year + '.' + month + '.' + day;

    setValue('birth', value);
  };

  const handleComplete = (data: any) => {
    setValue('address', data.address);

    onToggleModal();
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  // 체크박스 전체 동의
  // const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.target.checked
  //     ? setCheckList(['all', 'member', 'site', 'info', 'marketing'])
  //     : setCheckList([]);
  // };

  // useEffect(() => {
  //   if (getValues('all') === true) {
  //     setValue('member', true);
  //     setValue('site', true);
  //     setValue('info', true);
  //     setValue('marketing', true);
  //   }
  // });

  console.log(gender);

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {isOpen && (
        <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      <section>
        <div className='mobile:flex mobile:justify-center mobile:mt-[8.0625rem] mobile:mb-[4rem]'>
          <Logo size='lg' />
        </div>
      </section>
      {/* 입력 란 */}
      <section>
        <div className='m-auto mobile:h-[85.5rem] w-[30rem] desktop:h-[85.5rem]'>
          <div className='mobile:h-[4.375rem] mobile:pt-[0.625rem] mobile:pl-[2rem] mobile:text-[1.25rem] mobile:font-bold mobile:border-b-2'>
            회원가입
          </div>
          <div className='mt-[3rem]'>
            <div className='grid pl-[6%] mobile:h-[5.75rem]'>
              <div>이메일</div>
              <div className='flex gap-x-3'>
                <TextInput
                  control={control}
                  placeholder='이메일을 입력하세요'
                  borderRadius={true}
                  name={'email'}
                  rules={{ required: false }}
                />
                <Tag mode='gray' isFlat={true} handleTagClick={fetchProfile}>
                  중복 확인
                </Tag>
              </div>
              {messageOpen ? (
                <div className='text-xs pl-[20px] text-red-500'>{message}</div>
              ) : null}
            </div>
            <div className='grid px-[6%] mobile:h-[5.75rem]'>
              <div>비밀번호</div>
              <div className=''>
                <TextInput
                  control={control}
                  type='password'
                  placeholder='비밀번호를 입력하세요'
                  borderRadius={true}
                  name={'password'}
                  rules={{ required: false, minLength: 8, maxLength: 14 }}
                />
              </div>
            </div>
            <div className='grid px-[6%] mobile:h-[5.75rem]'>
              <div>비밀번호 확인</div>
              <div className=''>
                <TextInput
                  control={control}
                  type='password'
                  placeholder='비밀번호를 재입력하세요'
                  borderRadius={true}
                  name={'pwcheck'}
                  rules={{
                    required: false,
                    minLength: 8,
                    maxLength: 14,
                    onChange: () => passwordValidation(),
                  }}
                />
              </div>
              {passwordOpen && (
                <div className='text-xs pl-[20px]'>{pwcheckmsg}</div>
              )}
            </div>
            <div className='grid px-[6%] mobile:h-[5.75rem]'>
              <div>이름</div>
              <div>
                <TextInput
                  control={control}
                  placeholder='이름을 입력하세요'
                  borderRadius={true}
                  name={'name'}
                  rules={{ required: false }}
                />
              </div>
            </div>
            <div className='flex justify-between p-[6%] mobile:h-[5.75rem]'>
              <div>성별</div>
              <div className='z-10'>
                {dropdown === false ? (
                  <Tag mode='gray' isFlat={true} handleTagClick={genderOption}>
                    선택
                  </Tag>
                ) : null}
                {dropdown && (
                  // 라디오 버튼으로 바뀔 예정
                  <Dropdown
                    options={genderOptions}
                    defaultText=''
                    setValue={setGender}
                  />
                )}
              </div>
            </div>
            <div className='grid px-[6%] mobile:h-[5.75rem]'>
              <div>생년월일</div>
              <div className='flex gap-x-3'>
                <TextInput
                  control={control}
                  placeholder='yyyy.mm.dd'
                  borderRadius={true}
                  name={'birth'}
                />
                <Tag
                  mode='gray'
                  isFlat={true}
                  handleTagClick={onClickDatePicker}
                >
                  선택
                </Tag>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date) => {
                    setSelectedDate(date);
                    onChangebirth();
                    setDatePicker(false);
                  }}
                  open={datePicker}
                />
              </div>
            </div>
            <div className='grid px-[6%] mobile:h-[5.75rem]'>
              <div>전화번호</div>
              <div className=''>
                <TextInput
                  control={control}
                  placeholder='번호를 입력하세요'
                  borderRadius={true}
                  name={'phone'}
                  rules={{ required: false }}
                />
              </div>
            </div>
            <div className='grid px-[6%] mobile:h-[7rem]'>
              <div>주소</div>
              <div className='grid gap-y-2 mt-[0.625rem]'>
                <div className='flex gap-x-3'>
                  <TextInput
                    control={control}
                    placeholder='주소를 입력하세요'
                    borderRadius={true}
                    name={'address'}
                    rules={{ required: false }}
                  />
                  <Tag mode='gray' isFlat={true} handleTagClick={onToggleModal}>
                    입력
                  </Tag>
                </div>
                <div>
                  <TextInput
                    control={control}
                    placeholder='상세주소를 입력하세요'
                    borderRadius={true}
                    name={'detail'}
                    rules={{ required: false }}
                  />
                </div>
                <span className='text-xs pl-2'>
                  동네 기반으로 니어동물, 봉사활동을 추천할 때 필요해요
                </span>
              </div>
            </div>
            <div className='m-auto grid gap-y-2 mobile:w-[26.25rem] mobile:h-[16rem] mobile:mt-[5rem]'>
              <div className='border-b-2 h-[2.5rem]'>
                <CheckBox
                  control={control}
                  labelType='singletext'
                  name={'all'}
                  type='checkbox'
                  isResponsive={true}
                  label='전체동의'
                />
              </div>
              <div className='grid gap-y-4'>
                <CheckBox
                  control={control}
                  labelType='singletext'
                  name={'member'}
                  type='checkbox'
                  isResponsive={true}
                  label='(필수) 개인 회원 약관에 동의'
                />
                <CheckBox
                  control={control}
                  labelType='singletext'
                  name={'info'}
                  type='checkbox'
                  isResponsive={true}
                  label='(필수) 개인정보 수집 및 이용 동의'
                />
                <CheckBox
                  control={control}
                  labelType='singletext'
                  name={'site'}
                  type='checkbox'
                  isResponsive={true}
                  label='(필수) 위치기반 서비스 이용에 동의'
                />
                <CheckBox
                  control={control}
                  labelType='singletext'
                  name={'marketing'}
                  type='checkbox'
                  isResponsive={true}
                  label='(선택) 마케팅 정보 수신 동의 및 마케팅'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <FooterShadowBox>
          <ButtonXL type='submit'>가입완료</ButtonXL>
        </FooterShadowBox>
      </section>
    </form>
  );
};

export default SignupClient;
