import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

const authRoutes = ["/login", "/register"];
const commonPrivateRoutes = [
  "/dashboard",
  "/dashboard/change-password",
  "/doctors",
];
const roleBasedPrivateRoutes = {
  PATIENT: [/^\/dashboard\/patient/],
  DOCTOR: [/^\/dashboard\/doctor/],
  ADMIN: [/^\/dashboard\/admin/],
  SUPER_ADMIN: [/^\/dashboard\/super-admin/],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get("accessToken")?.value;

  let decodedData = null;

  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }

  const role = decodedData?.role;

  if (!accessToken) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (
    accessToken &&
    (commonPrivateRoutes.includes(pathname) ||
      commonPrivateRoutes.some((route) => pathname.startsWith(route)))
  ) {
    return NextResponse.next();
  }

  // if (accessToken && commonPrivateRoutes.includes(pathname)) {
  //   return NextResponse.next();
  // }

  // //manually private route role wise ...................
  // if (role === "ADMIN" && pathname.startsWith("/dashboard/admin")) {
  //   return NextResponse.next();
  // }
  // if (role === "DOCTOR" && pathname.startsWith("/dashboard/doctor")) {
  //   return NextResponse.next();
  // }

  // role base dynamic protected route
  if (
    role &&
    roleBasedPrivateRoutes[role as keyof typeof roleBasedPrivateRoutes]
  ) {
    const routes =
      roleBasedPrivateRoutes[role as keyof typeof roleBasedPrivateRoutes];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*", "/doctors/:page*"],
};
