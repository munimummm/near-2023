/* eslint-disable @next/next/no-before-interactive-script-outside-document */
// import Script from 'next/script';
import { Footer, Top } from 'ui';
export default function ShelterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Top />
      <section className='pt-12'>{children}</section>
      <Footer />
      {/* <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`} //dapi.kakao.com/v2/maps/sdk.js?appkey=%{}.&libraries=services,clusterer&autoload=false"
        strategy='beforeInteractive'
      /> */}
    </>
  );
}
