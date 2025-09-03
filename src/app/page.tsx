export default function Home() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to Learn Tamil for Kids!
      </h1>
      <p className="mb-8 text-lg">
        Explore lessons, games, quizzes, and track your progress as you learn
        Tamil in a fun way.
      </p>
      <div className="flex flex-wrap gap-6 justify-center mt-8">
        <a
          href="/lessons"
          className="bg-blue-200 hover:bg-blue-300 px-6 py-3 rounded shadow text-xl font-semibold"
        >
          Lessons
        </a>
        <a
          href="/games"
          className="bg-green-200 hover:bg-green-300 px-6 py-3 rounded shadow text-xl font-semibold"
        >
          Games
        </a>
        <a
          href="/quizzes"
          className="bg-yellow-200 hover:bg-yellow-300 px-6 py-3 rounded shadow text-xl font-semibold"
        >
          Quizzes
        </a>
        <a
          href="/progress"
          className="bg-purple-200 hover:bg-purple-300 px-6 py-3 rounded shadow text-xl font-semibold"
        >
          Progress
        </a>
        <a
          href="/about"
          className="bg-pink-200 hover:bg-pink-300 px-6 py-3 rounded shadow text-xl font-semibold"
        >
          About
        </a>
      </div>
    </main>
  );
}
