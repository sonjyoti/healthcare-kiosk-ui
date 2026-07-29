export default function BookingStepper({ currentStep }) {
  const steps = ["Department", "Symptoms", "Doctor", "Slot", "Confirm"];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;

          return (
            <div
              key={step}
              className="flex-1 flex flex-col items-center relative"
            >
              {/* Connecting Line */}

              {index !== steps.length - 1 && (
                <div
                  className={`
                                    absolute
                                    top-5
                                    left-1/2
                                    w-full
                                    h-1

                                    ${
                                      stepNumber < currentStep
                                        ? "bg-blue-600"
                                        : "bg-gray-300"
                                    }
                                `}
                />
              )}

              {/* Circle */}

              <div
                className={`
                                z-10
                                w-10
                                h-10
                                rounded-full
                                flex
                                items-center
                                justify-center
                                text-white
                                font-bold

                                ${
                                  stepNumber < currentStep
                                    ? "bg-green-600"
                                    : stepNumber === currentStep
                                      ? "bg-blue-600"
                                      : "bg-gray-400"
                                }
                            `}
              >
                {stepNumber < currentStep ? "✓" : stepNumber}
              </div>

              <span className="mt-3 text-sm font-medium text-center">
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
