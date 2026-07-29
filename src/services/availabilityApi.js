import { slots } from "../data/slots";

export function getAvailableSlots(doctorId) {
  console.log("Doctor:", doctorId);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: slots,
      });
    }, 1000);
  });
}