import Label from "@/components/label/label";
import { nextAuthOptions } from "@/lib/next-auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home(props: any) {
  // // const appStore = useApplication();
  // const session = await getServerSession(nextAuthOptions);
  // if (session == null) {
  //   redirect("/api/auth/signin");
  // }
  // const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Everyone</h1>
      <Label />
    </main>
  );
}
