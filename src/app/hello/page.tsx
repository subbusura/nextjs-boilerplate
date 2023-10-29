//import { useApplication } from "@/contexts/application/application.context";

import Label from "@/components/label/label";

export default function Home() {
  // const appStore = useApplication();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Everyone</h1>
      <Label />
    </main>
  );
}
