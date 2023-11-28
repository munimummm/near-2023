import Link from 'next/link';

function BottomButton({ href, text }) {
  return (
    <Link
      className='text-base font-normal tracking-tight text-center text-text-gray'
      href={href}
    >
      {text}
    </Link>
  );
}

function BottomButtonsSection() {
  return (
    <section className='w-full flex flex-col justify-center items-center gap-8 mobile:flex-col mobile:gap-8 tablet:flex-row tablet:gap-20 desktop:flex-row desktop:gap-[7.5rem]'>
      <BottomButton href={'/'} text={'비밀번호 변경'} />
      <div className='bg-gray-1 w-[22.5rem] h-[0.0625rem] mobile:w-[22.5rem] mobile:h-[0.0625rem] tablet:w-[0.0625rem] tablet:h-[3.0313rem] desktop:w-[0.0625rem] desktop:h-[3.0313rem]' />
      <BottomButton href={'/'} text={'회원 탈퇴'} />
    </section>
  );
}

export default BottomButtonsSection;
