import deliveryRestaurants from "./restaurantMenuData.js";
const deliveryRestaurantsContainerEl = document.querySelector(
  ".deliveryRestaurants-container"
);

const displayMenu = () => {
  deliveryRestaurants.forEach((item) => {
    const menuItem = `<div class="deliveryRestaurants-card">
                <div class="discount-container">
                    <p class="discount-percentage">40% OFF</p>
                </div>
                <img src="assets\food\biriyani\ChickenTikkaBiryani.avif" alt="ChickenTikkaBiryani" class="foodImage">
                <div class="deliveryRestaurants-details">
                    <div class="deliveryRestaurants-name">
                        <b class="restaurant-name">Al Zameer</b>
                        <div class="restaurant-rating-container">
                            <b class="restaurant-rating">4.1 </b>
                            <p class="star-icon">&#9734</p>
                        </div>
                    </div>
                    <div class="cuisine-price">
                        <p class="cuisine">North Indian, Mughlai</p>
                        <div class="price">
                            <p class="price-for-one">₹150 for one</p>
                        </div>
                    </div>
                    <div class="time">
                        <b class="delivery-time">26 mins</b>
                    </div>
                </div>
            </div>`;

    deliveryRestaurantsContainerEl.appendChild(menuItem);
  });
};

displayMenu();

console.log("testing")