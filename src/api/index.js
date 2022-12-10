import axios from "axios";

const url = "https://localhost:3000/";

export const newReservation = (reservationData) =>
  axios.post(url + "newReservation", reservationData);
