import { useEffect, useState } from "react";
import { getRecommendations } from "../services/recommendationApi";

export default function useRecommendations(department, symptoms) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!department) return;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const response = await getRecommendations({
          department,
          symptoms,
        });

        setDoctors(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [department, symptoms]);

  return {
    doctors,
    loading,
    error,
  };
}