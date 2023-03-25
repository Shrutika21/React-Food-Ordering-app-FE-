import { useState, useEffect } from "react";
import { GET_RESTAURANT_MENU_URL } from "../Constants";
const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);
  const [restaurantDetails, setRestaurauntDetails] = useState(null);
  console.log("resId here:" + resId);
  useEffect(() => {
    getMenu();
    getRestaurantDetails();
  }, []);

  async function getMenu() {
    const data = await fetch(GET_RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    const menuData =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;
    console.log("Menu=" + JSON.stringify(menuData));
    setRestauraunt(menuData);
  }

  async function getRestaurantDetails() {
    const data = await fetch(GET_RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    const restaurantDetails = json?.data.cards[0].card.card.info;
    console.log("restaurantDetails =" + JSON.stringify(restaurantDetails));
    setRestaurauntDetails(restaurantDetails);
  }

  return {
    restaurantDetails: restaurantDetails,
    restaurantMenu: restaurant,
  };
};

export default useRestaurant;
