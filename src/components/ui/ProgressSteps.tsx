interface ProgressStepsProps {
  step: number;
  steps: string[];
}

export function ProgressSteps({ step, steps }: ProgressStepsProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const active = stepNumber <= step;
        return (
          <div key={index} className="flex items-center sm:flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                active ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-500'
              }`}
            >
              {stepNumber}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 rounded ${
                  active ? 'bg-secondary' : 'bg-gray-200'
                }`}
              />
            )}
            <span className="hidden sm:block text-sm text-gray-600 ml-2">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
