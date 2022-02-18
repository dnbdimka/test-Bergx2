export function isLoading(state = false, action) {
  switch (action.type) {
    case "ITEMS_FETCH_DATA_REQUEST":
      return true;
    case "ITEMS_FETCH_DATA_SUCCESS":
      return false;
    case "ITEMS_FETCH_DATA_ERROR":
      return false;

    default:
      return state;
  }
}
