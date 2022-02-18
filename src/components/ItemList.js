import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../redux/operations/items";
import { getIsError, getIsLoading, getItems } from "../redux/selectors/items";
import SortItemList from "./SortItemList";

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchData("http://5af1eee530f9490014ead8c4.mockapi.io/items");
  }

  render() {
    const { items, isLoading, error } = this.props;
    return (
      <div>
        {isLoading ? (
          <h3>Loading ...</h3>
        ) : (
          <div>
            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.label}</li>
              ))}
            </ul>
            <h3>{error ? `Error: ${error}!` : "Sorted:"}</h3>
            <SortItemList items={items} />
          </div>
        )}
      </div>
    );
  }
}

ItemList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    items: getItems(state),
    isLoading: getIsLoading(state),
    error: getIsError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
