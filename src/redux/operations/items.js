import {
  itemsFetchDataError,
  itemsFetchDataRequest,
  itemsFetchDataSuccess,
} from "../actions/items";

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsFetchDataRequest());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch((err) => dispatch(itemsFetchDataError(err.message)));
  };
}
