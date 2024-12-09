import PropTypes from "prop-types";

const DisplayCard = (props) => {
  function handleClose() {
    props.fromChild();
  }
  return (
    <div className=" fixed inset-0 floatcard  top-12 left-12 z-20 bg-white-400 border-solid rounded-lg w-1/2 h-4/6 md:shadow-blue-600 md:shadow-md md:w-4/5 md:h-2/4  lg:h-3/5 xl:h-3/4 bg-opacity-40 backdrop-saturate-180 backdrop-blur-lg ">
      <div className=" grid grid-cols-2  gap-4">
        <img
          src={props.image}
          alt={props.title}
          className="w-48 h-72 object-contain rounded-t-lg col-span-1"
        />
        <div>
          <h1 className="col-span-1text-lg font-bold text-gray-800 mt-4 ">
            {props.title}
          </h1>
          <h2 className=" text-md font-semibold text-orange-500 mt-2">
            ₹{props.price}
          </h2>
          <h3 className="text-sm font-medium text-gray-600 mt-1">
            {props.category}
          </h3>
          <p className="text-sm text-white-500 mt-2 h-15 ">
            {props.description}
          </p>
        </div>
        <button
          className="mt-4 bg-blue-500 col-span-2 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          onClick={handleClose}
        >
          close
        </button>
      </div>
    </div>
  );
};
DisplayCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fromChild: PropTypes.func.isRequired,
};

export default DisplayCard;
