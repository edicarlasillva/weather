const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function forecast(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@forecast/ADD_CARD_REQUEST":
      return { ...state, loading: true };
    case "@forecast/ADD_CARD_SUCCESS":
      return {
        ...state,
        data: [action.payload.data, ...state.data],

        loading: false,
      };
    case "@forecast/ADD_FAILURE":
      return { ...state, loading: false, data: [] };
    case "@forecast/REMOVE_CARD":
      return {
        ...state,
        data: [...state.data.filter((data) => data.id !== action.payload)],
      };
    case "@forecast/LOAD_DETAILS":
      return {};
    default:
      return state;
  }
}
