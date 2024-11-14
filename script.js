
const CITY_ARRAY =[ 'Agra','Allahabad','Amravati','Amritsar','Bengaluru','Bhopal','Bhubaneswar','Chennai','Cuttack','Delhi','Goa','Guntur','Gwalior','Indore','Jaipur','Jammu','Jhansi','Kanpur','Kochi','Kota','Ooty','Rishikesh','Salem','Shimla','Trichy','Udaipur','Vellore','Varansai' ]

const STATES_CONTAINER = document.querySelector('.states-container');

CITY_ARRAY.forEach((city) => {

    const STATES_RESTURANT = document.createElement('div');
    STATES_RESTURANT.classList.add('states-restaurant');

    const CITY_NAME = document.createElement('p');
    const RIGHT_ARROW = document.createElement('img');

    CITY_NAME.textContent=city+' Restaurants';
    RIGHT_ARROW.src='./assets/icons/right-arrow.png';

    STATES_RESTURANT.appendChild(CITY_NAME);
    STATES_RESTURANT.appendChild(RIGHT_ARROW);

    STATES_CONTAINER.appendChild(STATES_RESTURANT);

    //eventListener for navigation
    STATES_RESTURANT.addEventListener('click',(event)=>{

        const OVERLAY_LOADER = document.querySelector('#overlay');
        OVERLAY_LOADER.style.display='block';

        setTimeout(()=>{NavigateHandler(city)},1500);
        setTimeout(()=>{OVERLAY_LOADER.style.display='none';},2000);
    })
});

function NavigateHandler(name){
    //building query parameter for cityFood.html
    window.location.href=`cityFood.html?city=${encodeURIComponent(name.toLowerCase())}`;
}






