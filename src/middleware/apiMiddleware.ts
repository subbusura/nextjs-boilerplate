import { createEdgeRouter } from "next-connect";
import { RequestContext } from "next/dist/server/next-server";
import { NextRequest } from "next/server";
import dbMiddleware from "./dbMiddleware";
const router = createEdgeRouter<NextRequest, RequestContext>();
router.use(dbMiddleware);
router.use(async (req: NextRequest, event: any, next: () => any) => {
  console.log("Auth Validator");
  return await next();
});
export default router;
