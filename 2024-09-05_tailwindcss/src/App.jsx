function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="px-10 py-5 flex items-center justify-between">
        <a href="/" className={`text-3xl font-bold text-red-600`}>
          NETFLEX
        </a>

        <a href="/sign-up" className="text-sm">
          회원가입
        </a>
      </header>

      <main className="px-10 py-16">
        <section>
          <h2 className="text-4xl font-semibold mb-8">현재 상영중인 영화</h2>

          <ul>
            <li>
              <a className="flex flex-col gap-y-3">
                <img className="w-80 h-[180px] bg-white" />
                <h5 className="text-lg font-medium">제목</h5>
              </a>
            </li>
          </ul>
        </section>

        <section className="[&&]:mt-20">
          <h2 className="text-4xl font-semibold mb-8">현재 상영중인 영화</h2>

          <ul className="grid grid-cols-5 gap-x-10 gap-y-16">
            {Array(100)
              .fill(" ")
              .map((_, i) => (
                <li key={i}>
                  <a className="flex flex-col gap-y-3">
                    <img className="w-full h-[180px] bg-white" />
                    <h5 className="text-lg font-medium">제목</h5>
                  </a>
                </li>
              ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
