import React, { PropTypes } from "react";
import Item from "./Item";

const SortItemList = ({ items, parrentId = 0 }) => {
  const childrenItems = items.filter((item) => item.parent_id === parrentId);
  return (
    childrenItems.length > 0 && (
      <ul>
        {childrenItems.map((item) => (
          <Item key={item.id} label={item.label}>
            <SortItemList items={items} parrentId={item.id} />
          </Item>
        ))}
      </ul>
    )
  );
};

SortItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  parentId: PropTypes.number,
};

export default SortItemList;
