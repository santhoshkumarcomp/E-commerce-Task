import { useEffect, useState } from "react";
import EachItem from "./EachItem";

const Container = () => {
  const [lists, setLists] = useState([]);
  const [inCartItems, setInCartItems] = useState([]);

  const getData = () => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => setLists(data));
  };

  useEffect(getData, []);

  const listFunction = (data) => {
    setInCartItems((prevItems) => {
      const isItemInCart = prevItems.find((item) => item.id === data.id);
      if (isItemInCart) {
        alert("Item already in cart");
        return prevItems;
      }
      return [...prevItems, data];
    });
  };

  const removeFromCart = (id) => {
    setInCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const listDisplay = lists.map((list) => (
    <div key={list.id}>
      <EachItem
        id={list.id}
        title={list.title}
        price={list.price}
        category={list.category}
        description={list.description}
        image={list.image}
        listFunction={() => listFunction(list)}
      />
    </div>
  ));

  const revealCart = () => {
    document.querySelector(".dropDown").classList.toggle("hidden");
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-4">Fake Store</h1>
      <div className="relative">
        <button
          onClick={revealCart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          <span className="material-symbols-outlined">shopping_cart</span>(
          {inCartItems.length})
        </button>

        <div className="dropDown hidden absolute z-30 w-72 h-auto bg-white border border-gray-300 shadow-lg rounded-lg mt-2 p-4">
          <h2 className="text-lg font-bold mb-2">Cart Items</h2>
          {inCartItems.length > 0 ? (
            <ul>
              {inCartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-2 border-b pb-2"
                >
                  <span className="text-sm font-medium">{item.title}</span>
                  <button
                    className="text-red-500 text-sm font-semibold hover:underline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">Your cart is empty.</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-center">{listDisplay}</div>
    </>
  );
};

export default Container;
