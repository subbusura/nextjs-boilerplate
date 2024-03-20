import { type NextRequest } from "next/server";
import { RequestContext } from "next/dist/server/base-server";
import nc from "./handler";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest, ctx: RequestContext) {
  return (await nc.clone().run(request, ctx)) as Promise<NextResponse>;
}
export async function PUT(request: NextRequest, ctx: RequestContext) {
  return nc.clone().run(request, ctx) as Promise<NextResponse>;
}
