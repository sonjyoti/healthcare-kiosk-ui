export default function DepartmentCard({
  department,
  onClick,
}) {
  const Icon = department.icon;

  return (
    <button
      onClick={onClick}
      className="
        bg-white
        rounded-2xl
        shadow-md
        hover:shadow-xl
        hover:scale-105
        transition-all
        duration-300
        p-8
        flex
        flex-col
        items-center
        justify-center
        gap-4
        border
        border-gray-200
        h-56
      "
    >
      <Icon
        size={64}
        className="text-blue-600"
      />

      <h3 className="text-2xl font-semibold text-gray-800 text-center">
        {department.name}
      </h3>
    </button>
  );
}