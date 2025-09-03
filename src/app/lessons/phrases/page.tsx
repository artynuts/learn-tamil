export default function TamilPhrasesLesson() {
  const phrases = [
    { tamil: "வணக்கம்", english: "Hello" },
    { tamil: "நன்றி", english: "Thank you" },
    { tamil: "எப்படி இருக்கிறீர்கள்?", english: "How are you?" },
    { tamil: "பார்க்க சந்தோஷம்", english: "Nice to meet you" },
    { tamil: "மன்னிக்கவும்", english: "Sorry" },
    { tamil: "உதவி செய்ய முடியுமா?", english: "Can you help?" }
  ];
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-4">Tamil Phrases</h2>
      <div className="grid grid-cols-1 gap-6 mb-8">
        {phrases.map((phrase, idx) => (
          <div key={idx} className="bg-pink-100 rounded-lg shadow p-6 text-xl font-bold text-center">
            <div className="text-2xl mb-2">{phrase.tamil}</div>
            <div className="text-lg text-gray-700">{phrase.english}</div>
          </div>
        ))}
      </div>
      <p className="text-lg">Practice saying these phrases with friends and family!</p>
    </main>
  );
}
