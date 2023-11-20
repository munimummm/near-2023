import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({
      cookies: () => cookieStore,
    });
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}

// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';
// import { type CookieOptions, createServerClient } from '@supabase/ssr';
// import { createRouteHandlerClient } from '../../../../../supabase/src';
//
// export async function GET(request: Request) {
//   const requestUrl = new URL(request.url);
//   const { searchParams, origin } = new URL(request.url);
//   const code = searchParams.get('code');
//   // if "next" is in param, use it as the redirect URL
//   const next = searchParams.get('next') ?? '/';
//
//   if (code) {
//     const cookieStore = cookies();
//     const supabase = createServerClient(
//       process.env.NEXT_PUBLIC_SUPABASE_URL!,
//       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//       {
//         cookies: {
//          //   if (code) {
// //     const cookieStore = cookies();
// //     const supabase = createRouteHandlerClient({
// //       cookies: () => cookieStore,
// //     });
// //     await supabase.auth.exchangeCodeForSession(code);
// //   }
//         },
//       },
//     );
//
//     const { error } = await supabase.auth.exchangeCodeForSession(code);
//     if (!error) {
//       return NextResponse.redirect(requestUrl.origin);
//     }
//   }
//
//   // return the user to an error page with instructions
//   return NextResponse.redirect(`${origin}/auth/auth-code-error`);
// }
