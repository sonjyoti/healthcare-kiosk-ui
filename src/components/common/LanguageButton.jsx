export default function LanguageButton({
  language,
  onClick
}) {
  return (

    <button
      onClick={onClick}
      className="
        px-8
        py-4
        rounded-xl
        border
        bg-white
        hover:bg-blue-100
        font-medium
        text-lg
        shadow
      "
    >
      {language}
    </button>

  )
}