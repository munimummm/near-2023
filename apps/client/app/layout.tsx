'use client';
import Providers from '@near/react-query/src/initReactQuery';
import Recoil from '@near/store/src/initRecoil';
import { ReactCookies } from '@near/react-cookie';
import 'ui/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <head>
        <title>NEAR - 유기견종합정보플랫폼</title>
      </head>
      <body>
        <Providers>
          <ReactCookies>
            <Recoil>{children}</Recoil>
          </ReactCookies>
        </Providers>
      </body>
    </html>
  );
}
