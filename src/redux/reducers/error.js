export function error(state = null, action) {
  switch (action.type) {
    case "ITEMS_FETCH_DATA_ERROR":
      return action.err;

    default:
      return state;
  }
}
