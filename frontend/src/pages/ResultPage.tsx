import { Link } from "react-router-dom";

const ResultPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg border border-blue-100 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Your Diabetes Risk Result</h1>
        <div className="mb-8">
          <span className="inline-block px-6 py-2 rounded-full text-lg font-semibold bg-blue-100 text-blue-700 mb-2">
            Risk Level: Moderate
          </span>
        </div>
        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            To view your personalized result and recommendations, please{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              log in
            </Link>{" "}
            or{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              create an account
            </Link>
            .
          </p>
        </div>
        <Link
          to="/"
          className="inline-block w-full py-3 bg-blue-100 text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-200 transition-colors duration-200 text-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
