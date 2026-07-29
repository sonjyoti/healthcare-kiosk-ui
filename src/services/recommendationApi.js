import { doctors } from "../data/doctors";

export function getRecommendations(payload) {
  console.log("Recommendation Request:", payload);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: doctors,
      });
    }, 1000);
  });
}