// import { getToken } from 'next-auth/jwt';
// import { NextRequest, NextResponse } from 'next/server';
//
// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//   const { pathname, origin } = req.nextUrl;
//
//   console.log(token);
//   if (token != null) {
//     return NextResponse.next();
//   } else {
//     return NextResponse.redirect(`${origin}/signin`);
//   }
// }
//
// export const config = {
//   matcher: ['/user/info', '/user/payment', '/user/result'],
// };
