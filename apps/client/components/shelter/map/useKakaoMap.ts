import { useKakaoLoader } from '@near/kakao-map';

export default function useKakaoMap() {
  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY as string,
    libraries: ['clusterer', 'services'],
  });
}
