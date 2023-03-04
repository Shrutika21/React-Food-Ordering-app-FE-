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
      <div>
        <div className="flex flex-wrap bg-gray-300">
          <figure class="max-w-lg p-5">
            <img
              class="h-auto max-w-full rounded-lg"
              src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
              alt="image description"
            />
          </figure>
          <div>
            <h3 className="text-3xl font-bold dark:text-white p-5">
              {restaurant?.name}
            </h3>
            <h3 className="text-xl font-bold dark:text-white p-5">
              {restaurant?.area},{restaurant?.city}
            </h3>
            <h3 className="text-xl font-bold dark:text-white p-5">
              {restaurant?.avgRating} stars
            </h3>
            <h3 className="text-xl font-bold dark:text-white p-5">
              {restaurant?.costForTwoMsg}
            </h3>
          </div>
        </div>
      </div>
      <div className="resruarantMenu">
        <ul className="max-w max-h-7 divide-y divide-gray-200 dark:divide-gray-700 p-10">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <>
              <li key={item.id} className="m:pb-9">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {item.cloudinaryImageId ? (
                      <img
                        className="flex w-30 h-40 rounded p-4"
                        src={IMG_CDN_URL + item.cloudinaryImageId}
                        alt="Neil image"
                      />
                    ) : (
                      <div className="flex mr-100 h-40 p-32"></div>
                    )}
                  </div>
                  <div className="flex-1 w-20 h-20 ">
                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {item.price / 100}
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
