import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DiabetesTest = () => {
  const [form, setForm] = useState({
    age: "",
    bmi: "",
    bloodPressure: "",
    glucose: "",
    insulin: "",
    skinThickness: "",
    pregnancies: "",
    gender: "",
    familyHistory: "",
  });

  const navigate = useNavigate();

  // Placeholder for form submission
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/result");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white py-16 relative">
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-blue-700 bg-white/80 hover:bg-blue-100 rounded-lg px-4 py-2 shadow transition-colors duration-200 text-lg font-semibold z-20"
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </Link>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg border border-blue-100"
      >
        <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">Diabetes Risk Assessment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              min="0"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">BMI</label>
            <input
              type="number"
              name="bmi"
              value={form.bmi}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              min="0"
              step="0.1"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Blood Pressure (mm Hg)</label>
            <input
              type="number"
              name="bloodPressure"
              value={form.bloodPressure}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              min="0"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Glucose Level (mg/dL)</label>
            <input
              type="number"
              name="glucose"
              value={form.glucose}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              min="0"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Insulin (mu U/ml)</label>
            <input
              type="number"
              name="insulin"
              value={form.insulin}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              min="0"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Skin Thickness (mm)</label>
            <input
              type="number"
              name="skinThickness"
              value={form.skinThickness}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              min="0"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Pregnancies</label>
            <input
              type="number"
              name="pregnancies"
              value={form.pregnancies}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              min="0"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-1">Family History of Diabetes</label>
            <select
              name="familyHistory"
              value={form.familyHistory}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-200 text-lg mt-2"
        >
          Check My Risk
        </button>
      </form>
    </div>
  );
};

export default DiabetesTest;
