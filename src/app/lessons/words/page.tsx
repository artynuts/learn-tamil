export default function TamilWordsLesson() {
  const words = [
    { tamil: "அம்மா", english: "Mother" },
    { tamil: "அப்பா", english: "Father" },
    { tamil: "நாய்", english: "Dog" },
    { tamil: "பூனை", english: "Cat" },
    { tamil: "மரம்", english: "Tree" },
    { tamil: "நீர்", english: "Water" },
    { tamil: "சூரியன்", english: "Sun" },
    { tamil: "நிலா", english: "Moon" }
  ];
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-4">Tamil Words</h2>
      <div className="grid grid-cols-2 gap-6 mb-8">
        {words.map((word, idx) => (
          <div key={idx} className="bg-green-100 rounded-lg shadow p-6 text-2xl font-bold text-center">
            <div className="text-3xl mb-2">{word.tamil}</div>
            <div className="text-lg text-gray-700">{word.english}</div>
          </div>
        ))}
      </div>
      <p className="text-lg">Try reading each word and matching it to its meaning!</p>
    </main>
  );
}
