import { type NextRequest } from "next/server";
import { RequestContext } from "next/dist/server/base-server";
import nc from "./handler";

export async function GET(request: NextRequest, ctx: RequestContext) {
  return await nc.clone().run(request, ctx);
}
export async function PUT(request: NextRequest, ctx: RequestContext) {
  return nc.clone().run(request, ctx);
}
