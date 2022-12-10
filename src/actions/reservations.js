import * as api from "../api";

export const newReservation = (reservationData) => async (dispatch) => {
  try {
    const { data } = await api.newReservation(reservationData);
    await dispatch({ type: "CREATE_RESERVATION", payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
