export function itemsFetchDataRequest() {
  return {
    type: "ITEMS_FETCH_DATA_REQUEST",
  };
}
export function itemsFetchDataSuccess(items) {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items,
  };
}
export function itemsFetchDataError(err) {
  return {
    type: "ITEMS_FETCH_DATA_ERROR",
    err,
  };
}
