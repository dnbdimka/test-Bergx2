import React, { PropTypes } from "react";

const Item = ({ label, children }) => {
  return (
    <li>
      {label}
      {children}
    </li>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Item;
