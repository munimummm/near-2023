'use client';

import React from 'react';
import { ReactNode } from 'react';
import { CookiesProvider } from 'react-cookie';
type Props = {
  children: ReactNode;
};

export function ReactCookies({ children }: Props) {
  return <CookiesProvider>{children}</CookiesProvider>; // RecoilRoot로 children 요소를 감싸주었다.
}
