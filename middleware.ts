import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/',                // Official website homepage
  '/landing',         // Mobile landing page
  '/sign-in(.*)',     // Clerk sign-in pages
  '/sign-up(.*)',     // Clerk sign-up pages
  '/api/webhook',     // Stripe webhook
])

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
