export default function Button({
    icon,
    children,
    onClick,
    variant="primary"
}) {

    const styles = {

        primary:"bg-blue-600 hover:bg-blue-700 text-white",

        secondary:"bg-green-600 hover:bg-green-700 text-white",

        outline:"border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50"

    }

    return (

        <button
            onClick={onClick}
            className={`
                ${styles[variant]}
                rounded-2xl
                w-full
                h-24
                px-8
                shadow-lg
                transition
                flex
                items-center
                justify-center
                gap-5
                text-2xl
                font-semibold
            `}
        >

            <span className="text-4xl">
                {icon}
            </span>

            <span>
                {children}
            </span>

        </button>

    )

}