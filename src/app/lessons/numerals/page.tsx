export default function TamilNumeralsLesson() {
  const numerals = [
    { tamil: "௦", english: "0", spelling: "suṇyam" },
    { tamil: "௧", english: "1", spelling: "onru" },
    { tamil: "௨", english: "2", spelling: "irandu" },
    { tamil: "௩", english: "3", spelling: "moondru" },
    { tamil: "௪", english: "4", spelling: "naangu" },
    { tamil: "௫", english: "5", spelling: "ainthu" },
    { tamil: "௬", english: "6", spelling: "aaru" },
    { tamil: "௭", english: "7", spelling: "ezhu" },
    { tamil: "௮", english: "8", spelling: "ettu" },
    { tamil: "௯", english: "9", spelling: "onpathu" },
  ];
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-4">Tamil Numerals</h2>
      <div className="grid grid-cols-5 gap-6 mb-8">
        {numerals.map((num, idx) => (
          <div
            key={idx}
            className="bg-red-100 rounded-lg shadow p-6 text-center"
          >
            <div className="text-4xl font-bold mb-2">{num.tamil}</div>
            <div className="text-lg text-gray-700">{num.english}</div>
            <div className="text-md text-gray-500 italic">{num.spelling}</div>
          </div>
        ))}
      </div>
      <p className="text-lg">Practice reading and writing Tamil numbers!</p>
    </main>
  );
}
