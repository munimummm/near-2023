import Providers from '@near/react-query/src/initReactQuery';
import Recoil from '@near/store/src/initRecoil';
import 'ui/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Recoil>{children}</Recoil>
        </Providers>
      </body>
    </html>
  );
}
