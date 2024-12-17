import PropTypes from "prop-types";
// import DisplayCard from './DisplayCard';
import { useState } from "react";

import DisplayCard from "./DisplayCard";

const EachItem = (props) => {
  // console.log(props);
  const [toDisplayCard, setToDisplayCard] = useState(false);
  function handleClick() {
    setToDisplayCard(true);
  }
  function fromChild() {
    console.log("function called");
    setToDisplayCard(false);
  }
  function handleFromEachItem(data) {
    console.log(data);
    props.listFunction(data);
  }

  return (
    <div className="border  rounded-lg shadow-lg w-72  p-4 m-4 bg-white text-center">
      <button onClick={handleClick}>
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-48 object-contain rounded-t-lg"
        />
        <h1 className="text-lg font-bold text-gray-800 mt-4 line-clamp-1">
          {props.title}
        </h1>
        <h2 className="text-md font-semibold text-orange-500 mt-2">
          ₹{props.price}
        </h2>
        <h3 className="text-sm font-medium text-gray-600 mt-1">
          {props.category}
        </h3>
        <p className="text-sm text-gray-500 mt-2 h-15 line-clamp-3">
          {props.description}
        </p>
      </button>
      <button
        className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        onClick={() => {
          handleFromEachItem(props.title);
        }}
      >
        Add to Cart
      </button>
      <div>
        {toDisplayCard && (
          <DisplayCard
            fromChild={fromChild}
            id={props.id}
            title={props.title}
            price={props.price}
            category={props.category}
            description={props.description}
            image={props.image}
          />
        )}
      </div>
    </div>
  );
};

EachItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  listFunction: PropTypes.func,
};

export default EachItem;
