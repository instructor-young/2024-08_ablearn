function Page({ children }) {
  return (
    <main className="container max-w-5xl mx-auto flex flex-col py-10 px-4">
      {children}
    </main>
  );
}

export default Page;
