import { IMG_CDN_URL } from "../Constants";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, slaString }) => {
  return (
    <div className="max-w-sm max-h-50 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow hover:shadow-2xl p-2 m-2">
      <img
        className="rounded-t-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant_image"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {cuisines.join(", ")}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {slaString}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
