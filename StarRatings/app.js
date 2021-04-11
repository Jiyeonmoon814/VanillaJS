const ratings = {
    samsung : 4.3,
    sony : 3.4,
    lg : 4.7,
    phillips : 3.8,
    hwawei : 2.9
}

//Total Stars
const starsTotal = 5;

//Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

//Form Elements 
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

//Initialize product
let product;

// Product select change 
productSelect.addEventListener('change',(e) => {
    product = e.target.value;
    //console.log(product);

    //Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

//Rating Control change
ratingControl.addEventListener('blur',(e)=> {
    const rating = e.target.value;
    //blur -->event 해제 시 발생, focusout은 event bubbling 이 발생하지만 blur는 발생하지 않음 (child에만 event 해제)
    //Make sure 5 or under
    if(rating > 5) {    
        alert('Please rate 1 - 5');
        return;
    }

    // Change rating
    ratings[product] = rating;

    getRatings();
});

//Get ratings
function getRatings() {
    for(let rating in ratings){
        //console.log(ratings[rating]);
        //Get percentage 
        const starPercentage = (ratings[rating] / starsTotal) * 100;
        //console.log(starPercentage);

        //Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage/10) * 10}%`;
        //console.log(starPercentageRounded);

        //Set width of stars-inner to percentage 
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

        //Add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
}
