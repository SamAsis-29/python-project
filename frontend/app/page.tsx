import ApiStatus from "./components/ApiStatus";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-12 text-gray-900">
      <div className="w-full max-w-3xl space-y-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Cognitive Workspace
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Your central workspace for intelligent services.
          </p>
        </header>

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">System Status</h2>
          <p className="mt-2 text-gray-600">
            Check the connection to the backend API.
          </p>

          <ApiStatus />
        </section>
      </div>
    </main>
  );
}