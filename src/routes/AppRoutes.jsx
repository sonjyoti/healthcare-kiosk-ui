import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Department from "../pages/Department/Department";
import Symptoms from "../pages/Symptoms/Symptoms";
import Recommendation from "../pages/Recommendation/Recommendation";
import SlotSelection from "../pages/SlotSelection/SlotSelection";
import Confirmation from "../pages/Confirmation/Confirmation";
import Success from "../pages/Success/Success";
import Forms from "../pages/Forms/Forms";
import Help from "../pages/Help/Help";

export default function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/department" element={<Department />} />

                <Route path="/symptoms" element={<Symptoms />} />

                <Route path="/recommendation" element={<Recommendation />} />

                <Route path="/slots" element={<SlotSelection />} />

                <Route path="/confirmation" element={<Confirmation />} />

                <Route path="/success" element={<Success />} />

                <Route path="/forms" element={<Forms />} />

                <Route path="/help" element={<Help />} />

            </Routes>

        </BrowserRouter>
    )
}