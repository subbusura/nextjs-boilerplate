import { NextRequest, NextResponse } from "next/server";
export default async function dbMiddleware(
  req: NextRequest,
  event: any,
  next: () => any
) {
  console.log("Db Connecting");
  return await next().catch((e: any) => {
    return NextResponse.json(
      {
        data: e.message,
      },
      {
        status: 500,
      }
    );
  }); // call next in chain;
}
