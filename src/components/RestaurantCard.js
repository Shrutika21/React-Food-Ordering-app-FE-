import { IMG_CDN_URL } from "../Constants";
const RestaurantCard = ({
      cloudinaryImageId,
      name,
      cuisines,
      slaString
  }) => {
      return (
          <div className="restaurant-list__card">
              <img src={IMG_CDN_URL+cloudinaryImageId}></img>
              <h2>{name}</h2>
              <h3>{cuisines.join(", ")}</h3>
              <h4>{slaString}</h4>
          </div>
      );
  }
  
export default RestaurantCard;