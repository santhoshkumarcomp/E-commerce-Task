import PropTypes from "prop-types";

const ItemList = ({ title, removeCartItem }) => {
  return (
    <div>
      {title}
      <>
        <button
          onClick={() => {
            removeCartItem();
          }}
          className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          -(remove)
        </button>
      </>
    </div>
  );
};
ItemList.propTypes = {
  title: PropTypes.string,
  removeCartItem: PropTypes.func,
};
export default ItemList;
