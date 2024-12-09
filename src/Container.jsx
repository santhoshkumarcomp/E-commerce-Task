import { useEffect, useState } from "react";
import EachItem from "./EachItem";
import ItemList from "./ItemList";

const Container = () => {
  const [lists, setLists] = useState([]);
  const [inCartItems, setInCartItems] = useState("");
  const [count, setCount] = useState(0);
  const getData = () => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLists(data);
      });
  };
  useEffect(getData, []);
  function listFunction(data) {
    console.log(data);
    if (!inCartItems.includes(data)) {
      setInCartItems((prevItems) => [...prevItems, data]);
      setCount(count + 1);
    } else {
      alert("Item already in Cart");
    }
  }

  const listDisplay = lists.map((list) => (
    <div key={list.id}>
      <EachItem
        id={list.id}
        title={list.title}
        price={list.price}
        category={list.category}
        description={list.description}
        image={list.image}
        listFunction={listFunction}
      />
    </div>
  ));
  function revealCart() {
    console.log("button clicked");
    document.querySelector(".dropDown").classList.toggle("hidden");
  }
  function removeCartItem() {
    setInCartItems("");
  }
  return (
    <>
      <>
        <div className="flex border-1 flex flex-row justify-center space-between">
          <div className="container mx-auto">
            <button onClick={revealCart}>
              <span className="material-symbols-outlined inline">
                shopping_cart{count}
              </span>
            </button>
            <div className=" dropDown hidden absolute text-white rounded z-30 w-72 h-72   bg-slate-400 ">
              <ItemList title={inCartItems} removeCartItem={removeCartItem} />
            </div>
          </div>
        </div>
      </>

      <>{listDisplay}</>
    </>
  );
};

export default Container;
