import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from "../../../services/history";
import api from "../../../services/api";

import { addCardSuccess, addCardFailure } from "../forecast/actions";

export function* load({ payload }) {
  try {
    const { city } = payload;

    if (city === "") {
      toast.error("Por favor, digite uma cidade.");
      return;
    }

    const response = yield call(
      api.get,
      `?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
    );

    yield put(addCardSuccess(response.data));
  } catch (error) {
    toast.error("Cidade não encontrada.");
    yield put(addCardFailure());
  }
}

export function details() {
  history.push("/details");
}

export default all([
  takeLatest("@forecast/ADD_CARD_REQUEST", load),
  takeLatest("@forecast/LOAD_DETAILS", details),
]);
