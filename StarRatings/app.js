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

//Get ratings
function getRatings() {
    for(let rating in ratings){
        console.log(ratings[rating]);
        //Get percentage 
        const starPercentage = (ratings[rating] / starsTotal) * 100;
        console.log(starPercentage);

        //Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage/10) * 10}%`;
        console.log(starPercentageRounded);

        //Set width of stars-inner to percentage 
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
    }
}
