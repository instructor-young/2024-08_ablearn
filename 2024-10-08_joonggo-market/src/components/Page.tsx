import { PropsWithChildren } from "react";

interface PageProps {
  title?: string;
}

function Page({ title, children }: PropsWithChildren<PageProps>) {
  return (
    <main className="bg-blue-500 px-5 py-10 container mx-auto max-w-screen-xl">
      {title && <h1 className="text-2xl font-bold mb-10 ">{title}</h1>}
      {children}
    </main>
  );
}

export default Page;
