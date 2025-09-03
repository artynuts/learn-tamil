export default function TamilLettersLesson() {
  const letters = [
    { tamil: "அ", english: "a" },
    { tamil: "ஆ", english: "aa" },
    { tamil: "இ", english: "e" },
    { tamil: "ஈ", english: "ee" },
    { tamil: "உ", english: "u" },
    { tamil: "ஊ", english: "uu" },
    { tamil: "எ", english: "ae" },
    { tamil: "ஏ", english: "aae" },
    { tamil: "ஐ", english: "ai" },
    { tamil: "ஒ", english: "o" },
    { tamil: "ஓ", english: "oo" },
    { tamil: "ஔ", english: "au" },
  ];
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-4">Tamil Letters</h2>
      <div className="grid grid-cols-4 gap-6 mb-8">
        {letters.map((letter, idx) => (
          <div
            key={idx}
            className="bg-yellow-100 rounded-lg shadow p-6 text-center"
          >
            <div className="text-4xl font-bold mb-2">{letter.tamil}</div>
            <div className="text-lg text-gray-700">{letter.english}</div>
          </div>
        ))}
      </div>
      <p className="text-lg">
        Practice saying each letter aloud! More interactive activities coming
        soon.
      </p>
    </main>
  );
}
