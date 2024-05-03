import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(  function middleware(req) {
  console.log(req.nextauth.token,req.nextUrl.pathname)
  if (req.nextauth.token && 
    req.nextUrl.pathname.startsWith('/login')
  ) {
    return NextResponse.redirect(new URL('/app', req.nextUrl))
  }
  return NextResponse.next()
},{
  pages:{
   signIn: '/login',
  },
});

 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};