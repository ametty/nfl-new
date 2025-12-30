export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm text-zinc-400">Hey, I’m</p>

      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
        Amett
      </h1>

      <p className="mt-5 text-lg leading-relaxed text-zinc-300">
        I build internet stuff. Right now I’m focused on learning, shipping small
        projects, and leveling up fast.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/about"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
        >
          About me
        </a>
        <a
          href="https://github.com/ametty"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-900"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}
