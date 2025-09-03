export default function TamilConsonantsLesson() {
  const consonants = [
    { tamil: "க", english: "ka" },
    { tamil: "ச", english: "cha" },
    { tamil: "ட", english: "ta" },
    { tamil: "த", english: "tha" },
    { tamil: "ப", english: "pa" },
    { tamil: "ற", english: "ra" },
    { tamil: "ஞ", english: "nya" },
    { tamil: "ங", english: "nga" },
    { tamil: "ண", english: "na" },
    { tamil: "ந", english: "na" },
    { tamil: "ம", english: "ma" },
    { tamil: "ய", english: "ya" },
    { tamil: "ர", english: "ra" },
    { tamil: "ல", english: "la" },
    { tamil: "வ", english: "va" },
    { tamil: "ழ", english: "zha" },
    { tamil: "ள", english: "la" },
    { tamil: "ஶ", english: "sha" },
    { tamil: "ஸ", english: "sa" },
    { tamil: "ஹ", english: "ha" },
  ];
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-4">Tamil Consonants</h2>
      <div className="grid grid-cols-4 gap-6 mb-8">
        {consonants.map((consonant, idx) => (
          <div
            key={idx}
            className="bg-blue-100 rounded-lg shadow p-6 text-center"
          >
            <div className="text-4xl font-bold mb-2">{consonant.tamil}</div>
            <div className="text-lg text-gray-700">{consonant.english}</div>
          </div>
        ))}
      </div>
      <p className="text-lg">
        Practice saying each consonant aloud! More interactive activities coming
        soon.
      </p>
    </main>
  );
}
