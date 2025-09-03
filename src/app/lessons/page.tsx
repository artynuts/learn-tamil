export default function LessonsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Tamil Lessons</h1>
      <p className="mb-6">
        Start learning Tamil letters, words, and phrases with interactive
        lessons!
      </p>
      <div className="flex flex-wrap gap-6 justify-center mt-8">
        <a
          href="/lessons/letters"
          className="bg-yellow-200 hover:bg-yellow-300 px-6 py-3 rounded shadow text-xl font-semibold"
        >
          Letters
        </a>
        <a
          href="/lessons/consonants"
          className="bg-blue-200 hover:bg-blue-300 px-6 py-3 rounded shadow text-xl font-semibold"
        >
          Consonants
        </a>
        <a
          href="/lessons/words"
          className="bg-green-200 hover:bg-green-300 px-6 py-3 rounded shadow text-xl font-semibold"
        >
          Words
        </a>
        <a
          href="/lessons/phrases"
          className="bg-pink-200 hover:bg-pink-300 px-6 py-3 rounded shadow text-xl font-semibold"
        >
          Phrases
        </a>
      </div>
    </main>
  );
}
