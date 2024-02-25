import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  //Local State variable  - super powerful variable

  const [listOfRestaurants, setListOfRestaurant] = useState([
    {
      info: {
        id: "65303",
        name: "The Red Box",
        cloudinaryImageId: "e30g5rut9b9vvwjjveds",
        cuisines: ["Chinese"],
        avgRating: 3.9,
        deliveryTime: 20,
      },
    },
    {
      info: {
        id: "65302",
        name: "Dominos",
        cloudinaryImageId: "e30g5rut9b9vvwjjveds",
        cuisines: ["Chinese"],
        avgRating: 4.1,
        deliveryTime: 20,
      },
    },
    {
      info: {
        id: "65301",
        name: "KFC",
        cloudinaryImageId: "e30g5rut9b9vvwjjveds",
        cuisines: ["Chinese"],
        avgRating: 4.4,
        deliveryTime: 20,
      },
    },
  ]);

  //Normal JS Variable

  let listOfRestaurantsJS = [
    {
      info: {
        id: "65303",
        name: "The Red Box",
        cloudinaryImageId: "e30g5rut9b9vvwjjveds",
        cuisines: ["Chinese"],
        avgRating: 3.9,
        deliveryTime: 20,
      },
    },
    {
      info: {
        id: "65302",
        name: "Dominos",
        cloudinaryImageId: "e30g5rut9b9vvwjjveds",
        cuisines: ["Chinese"],
        avgRating: 4.1,
        deliveryTime: 20,
      },
    },
    {
      info: {
        id: "65301",
        name: "KFC",
        cloudinaryImageId: "e30g5rut9b9vvwjjveds",
        cuisines: ["Chinese"],
        avgRating: 4.4,
        deliveryTime: 20,
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (x) => x.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
