export default function TamilLettersLesson() {
  const letters = [
    "அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"
  ];
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-4">Tamil Letters</h2>
      <div className="grid grid-cols-4 gap-6 mb-8">
        {letters.map((letter, idx) => (
          <div key={idx} className="bg-yellow-100 rounded-lg shadow p-6 text-4xl font-bold text-center">
            {letter}
          </div>
        ))}
      </div>
      <p className="text-lg">Practice saying each letter aloud! More interactive activities coming soon.</p>
    </main>
  );
}
