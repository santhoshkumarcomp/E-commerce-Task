import PropTypes from "prop-types";

const DisplayCard = (props) => {
  function handleClose() {
    props.fromChild();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative bg-white border border-gray-300 shadow-2xl rounded-2xl p-6 w-3/4 md:w-2/3 lg:w-1/2 h-auto max-h-[90%] bg-opacity-90 backdrop-blur-lg backdrop-filter overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <img
              src={props.image}
              alt={props.title}
              className="rounded-lg shadow-lg w-64 h-64 "
            />
          </div>

          <div className="flex flex-col">
            <div className="flex-grow">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {props.title}
              </h1>
              <h2 className="text-xl font-semibold text-orange-600 mb-2">
                ₹{props.price}
              </h2>
              <h3 className="text-md font-medium text-gray-500 mb-4">
                Category: {props.category}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {props.description}
              </p>
            </div>

            <div className="mt-4">
              <button
                onClick={handleClose}
                className="w-full md:w-auto px-6 py-2 rounded-full bg-red-500 text-white font-semibold hover:bg-red-700 transition duration-300 ease-in-out"
              >
                Close
              </button>
            </div>
          </div>
        </div>
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
