const arrows = document.querySelectorAll(".arrow"); // selecting all arrows class
const movieLists = document.querySelectorAll(".movie-list"); // selecting all movie list class

arrows.forEach((arrow,i)=>{ //by doing this we seperated every arrow.
    // here i is index and arrow is value like value key pair in map
    const itemLength = movieLists[i].querySelectorAll("img").length; // tells how many images are there in our one container
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        // innerWidth means width of our screen and 270 is height of image container
        const ratio = Math.floor(window.innerWidth / 270); 
        clickCounter++;
        if(itemLength - (4 + clickCounter) + (4 - ratio) >= 0)
        {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        }
        else
        {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    }); 
});


// TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");

// For night and light theme

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
});