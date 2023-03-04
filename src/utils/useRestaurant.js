import { useState, useEffect } from "react";
import { GET_RESTAURANT_MENU_URL } from "../Constants";
const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);
  console.log("resId here:" + resId);
  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    const data = await fetch(GET_RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    console.log("res=" + JSON.stringify(json));
    setRestauraunt(json.data);
  }

  return restaurant;
};

export default useRestaurant;
