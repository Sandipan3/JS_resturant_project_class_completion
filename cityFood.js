import {deliveryRestaurants} from "./restaurantMenuData.js";


const currentLocation = window.location.href;
const currentURL = new URL(currentLocation);
// console.log(currentURL);
const params = new URLSearchParams(currentURL.search);
// values after question mark
const city = params.get('city').charAt(0).toUpperCase() + params.get('city').slice(1);

// console.log(currentURL.search);
// console.log(params);
console.log(city);

const CITY_NAME = document.querySelector('.deliveryRestaurants-Header-city-name');
CITY_NAME.textContent=city;

document.querySelector('.city-name').textContent=city;

document.querySelector('.city-name-in-breadcrumb').textContent=city;


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
    foodImage.src=item.img;
    foodImage.alt=item.restaurantName;
    foodImage.classList.add('foodImage');
    //image added

    const deliveryRestaurantsDetails = document.createElement('div');
  
    deliveryRestaurantsDetails.classList.add('deliveryRestaurants-details');

    console.log('deliveryRestaurantsCard', deliveryRestaurantsCard);
    console.log('discountContainer', discountContainer);
    
    deliveryRestaurantsCard.appendChild(discountContainer);
    deliveryRestaurantsCard.appendChild(foodImage);
    deliveryRestaurantsCard.appendChild(deliveryRestaurantsDetails);
    

    const discountPercentage = document.createElement('p');
    discountPercentage.textContent=item.discount;
    discountPercentage.classList.add('discount-percentage');
    // discount added
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

    // restaurant name start
    const restaurantName = document.createElement('b');
    restaurantName.textContent=item.restaurantName;
    restaurantName.classList.add('restaurant-name');
    // restaurant name ended

    const restaurantRatingContainer = document.createElement('div')
    restaurantRatingContainer.classList.add('restaurant-rating-container');

    deliveryRestaurantName.appendChild(restaurantName);
    deliveryRestaurantName.appendChild(restaurantRatingContainer);

    //"restaurant rating started 
    const restaurantRating = document.createElement('b');
    restaurantRating.textContent=item.rating;
    restaurantRating.classList.add('restaurant-rating');
    //"restaurant rating ended
    
    // star-icon started
    const starIcon = document.createElement('p');
    starIcon.innerHTML='&#9734';
    starIcon.classList.add('star-icon');
    // star-icon ended

    restaurantRatingContainer.appendChild(restaurantRating);
    restaurantRatingContainer.appendChild(starIcon);

    // cuisine started
    const cuisine = document.createElement('p');
    cuisine.textContent=item.cuisine;
    cuisine.classList.add('cuisine');
    // cuisine started ended

    
    const price = document.createElement('div');
    price.classList.add('price');
    
    cuisinePrice.appendChild(cuisine);
    cuisinePrice.appendChild(price);
    
    // price started 
    const priceForOne = document.createElement('p');
    priceForOne.textContent=item.price;
    priceForOne.classList.add('price-for-one');
    // price ended
    
    price.appendChild(priceForOne);

    // delivery time started
    const deliveryTime  = document.createElement('b');
    deliveryTime.textContent=item.delieveryTime;
    deliveryTime.classList.add('delivery-time');
    // delivery time started

    time.appendChild(deliveryTime);
    
    
    // deliveryRestaurantsHeaderCityName.innerHTML
    
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

console.log("testing");
console.log(window.location.href);


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

//search functionality

const displaySearchResultsHandler =  () => {


  const searchInput = document.querySelector('.search-input').value.toLowerCase();
  const searchDishContainer = document.querySelector('.search-dish-container');

  const requiredRestaurants = deliveryRestaurants.filter((item) =>{
    return item.restaurantName.toLowerCase().includes(searchInput) ;
    //|| item.cuisine.toLowerCase().includes(searchInput);
  })
  searchDishContainer.style.display='block';
  searchDishContainer.innerHTML='';

  if (requiredRestaurants.length > 0 ){
    requiredRestaurants.forEach((item) => {
     searchDishContainer.innerHTML += 
                        `<div class="search-restaurant-container-img-details">
                            <img src="${item.img}" alt="${item.food}" class="search-restaurant-img">
                            <div class="search-restaurant-container-details">
                                <p class="search-restaurant-heading">${item.restaurantName}</p>
                                <div class="search-restaurant-rating-container">
                                    <b class="search-restaurant-rating">${item.rating}</b>
                                    <p class="search-star-icon" style="margin: 0px 0px 3px 2px;">☆</p>
                                </div>
                                <div class="search-restaurant-order-now">
                                    <p class="order-now">Order now</p>
                                    <img src="./assets/icons/red-right-arrow.png" alt="" style="width: 1.1rem;">
                                </div>
                                <p class="search-restaurant-deliverytime">Delivery in ${item.delieveryTime} mins</p>
                              </div>
                        </div>`;
    })
  }
  else{
    searchDishContainer.innerHTML=`<p>No results found!</p>`
  }

}

document.querySelector('.search-input').addEventListener('input', displaySearchResultsHandler);