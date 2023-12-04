'use client'; // NextJS에서 RecoilRoot는 클라이언트 컴포넌트 내에서만 사용할 수 있기에 'use client'를 작성해주어야 한다.

import React from 'react';
import { ReactNode } from 'react'; // ReactNode는 렌더링 될 수 있는 컴포넌트의 모든 유형을 의미
import { RecoilRoot } from 'recoil'; // RecoilRoot import

type Props = {
  children: ReactNode; // TS를 사용했기 때문에 children 요소의 타입을 ReactNode로 선언해주고
};

export default function Recoil({ children }: Props) {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        {children}
      </React.Suspense>
    </RecoilRoot>
  ); // RecoilRoot로 children 요소를 감싸주었다.
}
