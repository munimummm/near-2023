import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className='bg-red-500 bg-re-2000'>{children}</body>
    </html>
  );
}
