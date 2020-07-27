import { all } from "redux-saga/effects";

import forecast from "./forecast/sagas";

export default function* rootSaga() {
  return yield all([forecast]);
}
