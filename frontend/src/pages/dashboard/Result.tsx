const mockResults = [
  {
    date: "2025-06-08",
    risk: "Moderate",
    score: 0.56,
    details: "Maintain a healthy lifestyle and monitor your blood sugar regularly.",
  },
  {
    date: "2025-05-20",
    risk: "Low",
    score: 0.22,
    details: "Keep up the good work! Continue healthy habits.",
  },
];

const Result = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Results</h2>
      <p className="text-lg text-gray-700 mb-6">View your diabetes test results here.</p>
      <div className="space-y-6">
        {mockResults.length === 0 ? (
          <div className="bg-blue-50 rounded-xl p-6 shadow text-center text-gray-500">
            No results found. Take a diabetes test to see your results here.
          </div>
        ) : (
          mockResults.map((result, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <div className="text-sm text-gray-500 mb-1">Test Date: {result.date}</div>
                <div className="text-lg font-semibold text-blue-700">Risk: {result.risk}</div>
                <div className="text-gray-600">Score: {result.score}</div>
              </div>
              <div className="text-gray-600 md:text-right">{result.details}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Result;
