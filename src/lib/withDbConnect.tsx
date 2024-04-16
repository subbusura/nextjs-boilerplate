import "server-only";
import { getSystemSettingByKey } from "./data";
import dbConnect from "./utils/mongoose/dbConnect";
import { unstable_noStore as noStore } from "next/cache";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "./next-auth-options";
import { redirect } from "next/navigation";

export function withDbConnect(Component: any) {
  return async function WithDbConnect(props: any) {
    noStore();
    try {
      await dbConnect();
      const hasGoogleCaptcha = await getSystemSettingByKey(
        "google_captcha",
        null
      );
    } catch (error) {}
    const session = await getServerSession(nextAuthOptions);
    if (session == null) {
      redirect("/api/auth/signin");
    }
    return <Component {...props} isGoogleCaptcha={null} />;
  };
}
