interface Step {
  id: string;
  label: string;
}

interface ProgressStepperProps {
  steps: Step[];
  activeSection: string;
}

export default function ProgressStepper({
  steps,
  activeSection,
}: ProgressStepperProps) {
  // Calcula o índice da seção ativa
  const activeIndex = steps.findIndex((step) => step.id === activeSection);
  const currentIndex = activeIndex === -1 ? 0 : activeIndex;

  // Calcula a porcentagem de progresso
  const progress =
    steps.length > 1 ? (currentIndex / (steps.length - 1)) * 100 : 0;

  return (
    <div className="flex items-center gap-2 flex-1 max-w-2xl lg:mx-8">
      <div className="relative flex-1 h-0.5 lg:h-1 bg-brand-sand/30 rounded-full overflow-hidden">
        {/* Linha de progresso */}
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-sand to-brand-crimson rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />

        {/* Steps/Marcadores */}
        <div className="absolute inset-0 flex items-center justify-between px-0">
          {steps.map((step, index) => {
            const isActive = index <= currentIndex;
            const isCurrent = index === currentIndex;

            return (
              <button
                key={step.id}
                onClick={() => {
                  const element = document.getElementById(step.id);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative group flex flex-col items-center"
                aria-label={`Ir para ${step.label}`}
              >
                {/* Círculo do step */}
                <div
                  className={`
                    relative z-10 w-2 h-2 lg:w-3 lg:h-3 rounded-full border-2 transition-all duration-300
                    ${
                      isActive
                        ? "bg-brand-crimson border-brand-crimson lg:scale-125"
                        : "bg-brand-pearl border-brand-sand/50"
                    }
                    ${isCurrent ? "ring-2 lg:ring-4 ring-brand-crimson/30 scale-125 lg:scale-150" : ""}
                    group-hover:scale-125 lg:group-hover:scale-150 group-hover:border-brand-crimson
                  `}
                />

                {/* Label tooltip (aparece ao hover) */}
                <div
                  className={`
                    absolute top-5 lg:top-6 whitespace-nowrap px-1.5 py-0.5 lg:px-2 lg:py-1 rounded text-[10px] lg:text-xs font-medium
                    bg-brand-sienna text-brand-pearl opacity-0 pointer-events-none
                    transition-opacity duration-200 lg:group-hover:opacity-100
                    ${isCurrent ? "hidden lg:block lg:opacity-100" : ""}
                  `}
                >
                  {step.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
