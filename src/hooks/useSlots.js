import { useEffect, useState } from "react";
import { getAvailableSlots } from "../services/availabilityApi";

export default function useSlots(doctorId) {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!doctorId) return;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const response = await getAvailableSlots(doctorId);

        setSlots(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [doctorId]);

  return {
    slots,
    loading,
    error,
  };
}