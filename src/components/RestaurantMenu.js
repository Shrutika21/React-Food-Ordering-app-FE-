import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./shimmer";
import { useState } from "react";
import { IMG_CDN_URL } from "../Constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <ShimmerUI></ShimmerUI>
  ) : (
    <>
      <div className="restaurantInfo">
        <h1>Restraunt id: {id}</h1>
        <h2>Name:{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>Area:{restaurant?.area}</h3>
        <h3>City:{restaurant?.city}</h3>
        <h3>Rating:{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div className="resruarantMenu">
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
