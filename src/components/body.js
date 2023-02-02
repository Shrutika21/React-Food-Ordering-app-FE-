import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./shimmer";

function filterRestaurant(searchText, restaurantList) {
  const filteredData = restaurantList.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  console.log("filtered data:" + filteredData);

  return filteredData;
}

function setFilteredRestaurants(filteredData) {}
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    // API call
    console.log("effect called");
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.622654&lng=73.9160629&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    console.log("data=" + allRestaurants);
    setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants.length == 0 ? (
    <ShimmerUI></ShimmerUI>
  ) : (
    <>
      <div className="restuarant-search container">
        <form className="form-inline">
          <div className="restuarant-search__input-group">
            <input
              type="text"
              className="restuarant-search__input"
              placeholder="Search here.."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <span className="input-group-btn">
              <button
                id="search-this"
                type="button"
                className="btn btn-default search-btn"
                onClick={() => {
                  const filteredData = filterRestaurant(
                    searchText,
                    allRestaurants
                  );
                  setFilteredRestaurants(filteredData);
                }}
              >
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              {...restaurant.data}
              key={restaurant.data.id}
            ></RestaurantCard>
          );
        })}
      </div>
    </>
  );
};

export default Body;
