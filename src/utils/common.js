export function filterRestaurant(searchText, restaurantList) {
  const filteredData = restaurantList.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  console.log("filtered data:" + filteredData);

  return filteredData;
}
