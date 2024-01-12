import { Footer, Top } from 'ui';

export default function DiaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Top />
      <section className='pt-12 desktop:pt-0'>{children}</section>
      <Footer />
    </>
  );
}
