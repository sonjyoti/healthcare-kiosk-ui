import { useNavigate } from "react-router-dom";
import { ArrowLeft, House } from "lucide-react";

export default function PageHeader({ title }) {

    const navigate = useNavigate();

    return (

        <div className="flex justify-between items-center mb-10">

            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-blue-600 font-semibold"
            >
                <ArrowLeft size={28} />

                Back
            </button>

            <h2 className="text-3xl font-bold">

                {title}

            </h2>

            <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-blue-600 font-semibold"
            >
                <House size={28} />

                Home
            </button>

        </div>

    )

}