import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAINTENANCE_MODE = true;

export function middleware(request: NextRequest) {
  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Allow maintenance page itself
  if (pathname === "/maintenance") {
    return NextResponse.next();
  }

  // Allow static files, images, Next.js internals, verification files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|gif|css|js|woff|woff2|html)$/)
  ) {
    return NextResponse.next();
  }

  // Allow preview with secret param: ?preview=true
  if (request.nextUrl.searchParams.get("preview") === "true") {
    return NextResponse.next();
  }

  // Redirect everything else to maintenance page
  const maintenanceUrl = request.nextUrl.clone();
  maintenanceUrl.pathname = "/maintenance";
  return NextResponse.rewrite(maintenanceUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
