import { NextResponse } from "next/server";
import apiMiddlerware from "@/middleware/apiMiddleware";
const router = apiMiddlerware;
router
  .use(async (req: any, event: any, next: () => any) => {
    return await next();
  })
  .get(() => {
    // throw new Error("User Through the exception");
    //TODO send events
    return NextResponse.json({
      data: "New Message",
    });
  })
  .put(() => {
    const user = {};
    return NextResponse.json({ user });
  });

export default router;
