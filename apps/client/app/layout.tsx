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
