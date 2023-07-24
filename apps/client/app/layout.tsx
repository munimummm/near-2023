import React from 'react';
import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className='bg-red-100'>{children}</body>
    </html>
  );
}
