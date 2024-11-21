import {deliveryRestaurants} from "./restaurantMenuData.js";
const deliveryRestaurantsContainerEl = document.querySelector(
  ".deliveryRestaurants-container"
);

const displayMenu = () => {
  deliveryRestaurants.forEach((item) => {
    const deliveryRestaurantsCard = document.createElement('div');
    
    deliveryRestaurantsCard.classList.add('deliveryRestaurants-card');

    const discountContainer = document.createElement('div');
    
    discountContainer.classList.add('discount-container');

    const foodImage = document.createElement('img');
    foodImage.classList.add('foodImage');

    const deliveryRestaurantsDetails = document.createElement('div');
    deliveryRestaurantsDetails.classList.add('deliveryRestaurants-details');

    console.log('deliveryRestaurantsCard', deliveryRestaurantsCard);
    console.log('discountContainer', discountContainer);
    
    deliveryRestaurantsCard.appendChild(discountContainer);
    deliveryRestaurantsCard.appendChild(foodImage);
    deliveryRestaurantsCard.appendChild(deliveryRestaurantsDetails);
    

    const discountPercentage = document.createElement('p');
    
    discountPercentage.classList.add('discount-percentage');

    discountContainer.appendChild(discountPercentage);


    const deliveryRestaurantName = document.createElement('div')
    deliveryRestaurantName.classList.add('deliveryRestaurants-name');

    const cuisinePrice = document.createElement('div');
    cuisinePrice.classList.add('cuisine-price');

    const time = document.createElement('div');
    time.classList.add('time');

    deliveryRestaurantsDetails.appendChild(deliveryRestaurantName);
    deliveryRestaurantsDetails.appendChild(cuisinePrice);
    deliveryRestaurantsDetails.appendChild(time);

    const restaurantName = document.createElement('b');
    restaurantName.classList.add('restaurant-name');

    const restaurantRatingContainer = document.createElement('div')
    restaurantRatingContainer.classList.add('restaurant-rating-container');

    deliveryRestaurantName.appendChild(restaurantName);
    deliveryRestaurantName.appendChild(restaurantRatingContainer);


    const restaurantRating = document.createElement('b')
    restaurantRating.classList.add('restaurant-rating');

    const starIcon = document.createElement('p');
    starIcon.classList.add('star-icon');

    restaurantRatingContainer.appendChild(restaurantRating);
    restaurantRatingContainer.appendChild(starIcon);


    const cuisine = document.createElement('p');
    cuisine.classList.add('cuisine');
    const price = document.createElement('p');
    price.classList.add('price');
    
    cuisinePrice.appendChild(cuisine);
    cuisinePrice.appendChild(price);
    
    const priceForOne = document.createElement('p');
    priceForOne.classList.add('price-for-one');
    
    price.appendChild(priceForOne);

    const deliveryTime  = document.createElement('b');
    deliveryTime.classList.add('delivery-time');

    time.appendChild(deliveryTime);

    
    // const menuItem = document.createElement('div');
    // menuItem.innerHTML += `<div class="deliveryRestaurants-card">
    //             <div class="discount-container">
    //                 <p class="discount-percentage">40% OFF</p>
    //             </div>
    //             <img src="assets\food\biriyani\ChickenTikkaBiryani.avif" alt="ChickenTikkaBiryani" class="foodImage">
    //             <div class="deliveryRestaurants-details">
    //                 <div class="deliveryRestaurants-name">
    //                     <b class="restaurant-name">Al Zameer</b>
    //                     <div class="restaurant-rating-container">
    //                         <b class="restaurant-rating">4.1 </b>
    //                         <p class="star-icon">&#9734</p>
    //                     </div>
    //                 </div>
    //                 <div class="cuisine-price">
    //                     <p class="cuisine">North Indian, Mughlai</p>
    //                     <div class="price">
    //                         <p class="price-for-one">₹150 for one</p>
    //                     </div>
    //                 </div>
    //                 <div class="time">
    //                     <b class="delivery-time">26 mins</b>
    //                 </div>
    //             </div>
    //         </div>`;

    deliveryRestaurantsContainerEl.appendChild(deliveryRestaurantsCard);
  });
};

 displayMenu();

console.log("testing")


/*
import { deliveryRestaurants } from "./restaurantMenuData.js";

const deliveryRestaurantsContainerEl = document.querySelector(
  ".deliveryRestaurants-container"
);

const displayMenu = () => {
  deliveryRestaurants.forEach((item) => {
    const menuItem = document.createElement("div"); // Create a new div element
    menuItem.innerHTML += `
      <div class="deliveryRestaurants-card">
        <div class="discount-container">
          <p class="discount-percentage">${item.discount}</p>
        </div>
        <img src=${item.img} alt=${item.restaurantName} class="foodImage">
        <div class="deliveryRestaurants-details">
          <div class="deliveryRestaurants-name">
            <b class="restaurant-name">${item.restaurantName}</b>
            <div class="restaurant-rating-container">
              <b class="restaurant-rating">${item.rating}</b>
              <p class="star-icon">&#9734;</p>
            </div>
          </div>
          <div class="cuisine-price">
            <p class="cuisine">${item.cuisine}</p>
            <div class="price">
              <p class="price-for-one">${item.price}</p>
            </div>
          </div>
          <div class="time">
            <b class="delivery-time">${item.delieveryTime}</b>
          </div>
        </div>
      </div>
    `;
    menuItem.classList.add("deliveryRestaurants-item"); // Optional: Add a class for styling
    deliveryRestaurantsContainerEl.appendChild(menuItem); // Append the new element
  });
};

displayMenu();
*/