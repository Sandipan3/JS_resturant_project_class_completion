document.addEventListener('DOMContentLoaded', function () {
    selectedrestaurant = localStorage.getItem('selectedRestaurant');
})

const currentLocation = window.location.href;
const currentURL = new URL(currentLocation);
// console.log(currentURL);
const params = new URLSearchParams(currentURL.search);
// values after question mark

const CITY_URL_PARAMETER = params.get('city');
const capitalizedCity = CITY_URL_PARAMETER.charAt(0).toUpperCase() + CITY_URL_PARAMETER.slice(1);

const RESTAURANT_URL_PARAMETER = params.get('restaurant');
const CAPITALIZED_RESTAURANT = RESTAURANT_URL_PARAMETER.charAt(0).toUpperCase() + RESTAURANT_URL_PARAMETER.slice(1);

const CITY_NAME = document.querySelector('.city-name');
CITY_NAME.textContent = capitalizedCity;

document.querySelector('.city-name').textContent = capitalizedCity;

document.querySelector('.city-name-in-breadcrumb').textContent = capitalizedCity;

document.querySelector('.restaurant-name-in-breadcrumb').textContent = CAPITALIZED_RESTAURANT;

// access restaurant images from selectedRestaurant using array destructuring