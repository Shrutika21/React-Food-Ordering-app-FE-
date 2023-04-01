import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./shimmer";
import { useState } from "react";
import { IMG_CDN_URL } from "../Constants";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem, getTotalAmount } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id).restaurantMenu;
  const restaurantDetails = useRestaurant(id).restaurantDetails;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    dispatch(getTotalAmount());
  };
  var price = 0;
  console.log("restaurant Menu  here" + JSON.stringify(restaurant));
  return !restaurant ? (
    <ShimmerUI></ShimmerUI>
  ) : (
    <>
      <div>
        <div className="flex flex-wrap bg-gray-300">
          <figure className="max-w-lg p-5">
            <img
              className="h-auto max-w-full rounded-lg"
              src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId}
              alt="image description"
            />
          </figure>
          <div>
            <h3 className="text-3xl font-bold dark:text-white p-5">
              {restaurantDetails?.name}
            </h3>
            <h3 className="text-xl font-bold dark:text-white p-5">
              {restaurantDetails?.areaName},{restaurantDetails?.city}
            </h3>
            <h3 className="text-xl font-bold dark:text-white p-5">
              {restaurantDetails?.avgRating} stars
            </h3>
            <h3 className="text-xl font-bold dark:text-white p-5">
              {restaurantDetails?.costForTwoMsg}
            </h3>
          </div>
        </div>
      </div>
      <div className="resruarantMenu">
        <ul
          className="max-w max-h-7 divide-y divide-gray-200 dark:divide-gray-700 p-10 justify-center"
          data-testid="menu"
        >
          {restaurant.map((item) => (
            <>
              <li key={item.card.info.id} className="last:pb-40">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {item.card.info.imageId ? (
                      <img
                        className="flex w-30 h-40 rounded p-4"
                        src={IMG_CDN_URL + item.card.info.imageId}
                        alt="menu image"
                      />
                    ) : (
                      <img
                        className="flex w-30 h-40 rounded p-4"
                        src="https://t3.ftcdn.net/jpg/00/70/49/52/360_F_70495270_2aJc2punK2LJVhMCU7zxJdjRaKBS6wjy.jpg"
                      />
                    )}
                  </div>
                  <div className="flex-1 w-20 h-20 ">
                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                      {item.card.info.name}
                    </p>
                    <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                      {item.card.info.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {(price = item.card.info?.price
                      ? item.card.info.price
                      : item.card.info.defaultPrice) > 100 ? (
                      <span className="text-sm mr-1">₹{price / 100}</span>
                    ) : (
                      <span className="text-sm mr-1">₹{price}</span>
                    )}
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <button
                      data-testid="addBtn"
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                      onClick={() => {
                        handleAddItem(item.card.info);
                      }}
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        ADD
                      </span>
                    </button>
                  </div>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
