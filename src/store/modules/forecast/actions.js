export function addCardRequest(city) {
  return {
    type: "@forecast/ADD_CARD_REQUEST",
    payload: { city },
  };
}

export function addCardSuccess(data) {
  return {
    type: "@forecast/ADD_CARD_SUCCESS",
    payload: { data },
  };
}

export function addCardFailure() {
  return {
    type: "@forecast/SIGN_FAILURE",
  };
}

export function removeCard(id) {
  return {
    type: "@forecast/REMOVE_CARD",
    payload: id,
  };
}

export function loadDetails(id) {
  return {
    type: "@forecast/LOAD_DETAILS",
    payload: id,
  };
}
