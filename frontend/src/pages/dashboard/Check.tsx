import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const steps = [
  {
    name: "age",
    label: "What is your age group?",
    type: "age-group",
    options: [
      { label: "Below 40", value: "below_40" },
      { label: "41-49", value: "41_49" },
      { label: "50-59", value: "50_59" },
      { label: "60 or older", value: "60_plus" },
    ],
  },
  {
    name: "bmi",
    label: "What is your BMI?",
    type: "number",
    placeholder: "Enter your BMI",
    min: 0,
    step: 0.1,
  },
  {
    name: "smoke",
    label: "Are you a smoker?",
    type: "select",
    options: ["Yes", "No"],
    placeholder: "Select an option",
  },
  {
    name: "physicalActivity",
    label: "Are you physically active?",
    type: "select",
    options: ["Yes", "No"],
    placeholder: "Select an option",
    min: 0,
  },
  {
    name: "mentalHealth",
    label: "How would you rate your mental health?",
    type: "select",
    options: ["Good", "Fair", "Poor"],
    placeholder: "Select an option",
  },
  {
    name: "education",
    label: "What is your highest level of education?",
    type: "select",
    options: ["Elementary School", "Junior High School", "Senior High School", "College"],
    placeholder: "Select your education level",
  },
  {
    name: "income",
    label: "What is your annual income?",
    type: "select",
    options: [
      "Below 5 million IDR",
      "10-20 million IDR",
      "20-50 million IDR",
      "50-100 million IDR",
      "Above 100 million IDR",
    ],
    placeholder: "Select your income range",
  },
];

// Type guard to check if options are age group objects
function isAgeGroupOptions(options: unknown): options is { label: string; value: string }[] {
  return (
    Array.isArray(options) &&
    options.length > 0 &&
    typeof options[0] === "object" &&
    options[0] !== null &&
    "label" in options[0]
  );
}

const Check = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Record<string, string>>({
    age: "",
    gender: "",
    bmi: "",
    bloodPressure: "",
    glucose: "",
    familyHistory: "",
    smoke: "",
    physicalActivity: "",
    mentalHealth: "",
    education: "",
    income: "",
  });

  const current = steps[step];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [current.name]: e.target.value });
  };

  // For button group selection (age and select types)
  const handleButtonSelect = (value: string) => {
    setForm({ ...form, [current.name]: value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if ((current.type === "age-group" || current.type === "select") && !form[current.name]) return;
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // TODO: handle form submission
      alert("Form submitted! " + JSON.stringify(form));
    }
  };

  return (
    <div className="py-10 px-4 mx-auto">
      <h2 className="text-3xl text-center font-bold text-blue-700 mb-4">Diabetes Test</h2>
      <form
        onSubmit={handleNext}
        className="bg-white rounded-xl shadow p-6 flex flex-col gap-6 w-3/4 mx-auto justify-center items-center h-min"
        style={{ minWidth: 320, minHeight: 320 }}
      >
        <label className="text-lg font-medium text-gray-700 mb-2">{current.label}</label>
        {/* Button group for age-group and select types */}
        {(current.type === "age-group" && isAgeGroupOptions(current.options)) ||
        (current.type === "select" && Array.isArray(current.options)) ? (
          <div className="flex flex-col gap-3 w-full">
            <div
              className={`grid ${
                Array.isArray(current.options) && current.options.length > 3 ? "grid-cols-2" : "grid-cols-1"
              } gap-3`}
            >
              {(current.type === "age-group"
                ? (current.options as { label: string; value: string }[])
                : Array.isArray(current.options)
                ? current.options
                    .filter((opt): opt is string => typeof opt === "string")
                    .map((opt) => ({ label: opt, value: opt }))
                : []
              ).map((opt: { label: string; value: string }) => (
                <Button
                  key={opt.value}
                  type="button"
                  variant={form[current.name] === opt.value ? "default" : "outline"}
                  className={form[current.name] === opt.value ? "border-blue-600 bg-blue-100 text-blue-700" : ""}
                  onClick={() => handleButtonSelect(opt.value)}
                >
                  {opt.label}
                </Button>
              ))}
            </div>
            {!form[current.name] && <span className="text-xs text-red-500">Please select an option.</span>}
          </div>
        ) : (
          <Input
            type={current.type}
            name={current.name}
            value={form[current.name]}
            onChange={handleChange}
            placeholder={current.placeholder}
            min={current.min}
            step={current.step}
            required
          />
        )}
        <div className="flex justify-between mt-4">
          <Button
            type="button"
            variant="outline"
            className="mr-2"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            Back
          </Button>
          <Button
            type="submit"
            disabled={(current.type === "age-group" || current.type === "select") && !form[current.name]}
          >
            {step === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
        <div className="text-sm text-gray-500 text-center mt-2">
          Step {step + 1} of {steps.length}
        </div>
      </form>
    </div>
  );
};

export default Check;
