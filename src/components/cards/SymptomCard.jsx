export default function SymptomCard({
  symptom,
  selected,
  onClick,
}) {
  const Icon = symptom.icon;

  return (
    <button
      onClick={onClick}
      className={`
        h-48
        rounded-2xl
        border-2
        transition-all
        duration-300
        flex
        flex-col
        justify-center
        items-center
        gap-4
        shadow-md

        ${
          selected
            ? "bg-blue-600 text-white border-blue-600 scale-105"
            : "bg-white hover:bg-blue-50 border-gray-200"
        }
      `}
    >
      <Icon size={60} />

      <h3 className="text-xl font-semibold text-center px-2">
        {symptom.name}
      </h3>
    </button>
  );
}