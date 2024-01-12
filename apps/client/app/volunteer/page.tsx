import { Footer, Top } from 'ui';

const State404 = () => {
  return (
    <section className='mobile:mt-[9.5rem] tablet:mt-[9.5rem] desktop:mt-0 h-[50vh]'>
      <main className='text-center mt-40'>
        <span className='block text-5xl text-gray-2 mb-6'>Sorry..</span>
        <span className='text-3xl text-neutral-400'>
          <strong className='text-[#242424]'>서비스 준비중 </strong>입니다
        </span>
        <div className='flex flex-col gap-1 mt-10'>
          <span>이용에 불편을 드려 죄송합니다.</span>
          <span>보다 나은 서비스 제공을 위하여 페이지 준비 중에 있습니다.</span>
          <span>빠른 시일 내 준비하여 찾아 뵙겠습니다</span>
        </div>
      </main>
    </section>
  );
};
function Page() {
  return (
    <>
      <Top />
      <State404 />
      <Footer />
    </>
  );
}

export default Page;
