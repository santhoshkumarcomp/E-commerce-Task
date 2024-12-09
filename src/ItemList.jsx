import PropTypes from "prop-types";

const ItemList = ({ title }) => {
  return <div>{title}</div>;
};
ItemList.propTypes = {
  title: PropTypes.arr,
};
export default ItemList;
