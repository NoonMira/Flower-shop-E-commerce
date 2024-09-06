// import { supabase } from '@/app/lib/db';
// import { NextResponse } from 'next/server';

// export default async function middleware(req) {
//   const { data: session } = await supabase.auth.getSession();
//   const { pathname } = req.nextUrl;

//   if (pathname.startsWith('/admin')) {
//     const { data: admin } = await supabase
//       .from('admin')
//       .select('*')
//       .eq('id', session.user.id);

//     if (!admin) {
//       return NextResponse.redirect('/login');
//     }
//   }

//   if (pathname.startsWith('/user')) {
//     const { data: user } = await supabase
//       .from('user')
//       .select('*')
//       .eq('id', session.user.id);

//     if (!user) {
//       return NextResponse.redirect('/login');
//     }
//   }

//   return NextResponse.next();
// }
