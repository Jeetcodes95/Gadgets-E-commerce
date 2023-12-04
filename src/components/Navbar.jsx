import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { items } from "./Data";

const Navbar = ({ setdata }) => {
  const navigate = useNavigate();
  const [searchterm, setsearchterm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    // console.log(elements);
    setdata(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setdata(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchterm}`);
    setsearchterm("");
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-Cart
          </Link>
          <form onClick={handleSubmit} className="search-bar">
            <input
              value={searchterm}
              onChange={(e) => setsearchterm(e.target.value)}
              type="text"
              placeholder="Search Products"
              name=""
              id=""
            />
          </form>
          <Link to={"/cart"} className="cart">
            Cart
          </Link>
        </div>

        <div className="nav-bar-wrapper">
          <div className="items">Filter by {"->"}</div>
          <div onClick={() => setdata(items)} className="items">
            No Filter
          </div>
          <div onClick={() => filterByCategory("mobiles")} className="items">
            Mobiles
          </div>
          <div onClick={() => filterByCategory("laptops")} className="items">
            Laptops
          </div>
          <div onClick={() => filterByCategory("tablets")} className="items">
            Tablets
          </div>
          <div onClick={() => filterByPrice(29999)} className="items">
            {">="}2999
          </div>
          <div onClick={() => filterByPrice(49999)} className="items">
            {">="}4999
          </div>
          <div onClick={() => filterByPrice(69999)} className="items">
            {">="}6999
          </div>
          <div onClick={() => filterByPrice(89999)} className="items">
            {">="}8999
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
