let barsMeun = document.querySelector(".bars");
let navbar = document.querySelector(".navbar");

barsMeun.onclick = () => {
    barsMeun.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

// Change Images
let images = document.querySelectorAll(".image img");

// Remove Class Active With All Images
images.forEach((img) => {
    img.addEventListener("click", removeAdd);
    images.forEach((img) => {
        img.addEventListener("click", (e) => {
            // console.log(e.target.getAttribute("src"));
            let profelImage = document.querySelector(".asly").src = e.target.getAttribute("src");
            window.localStorage.setItem("profelImage", document.querySelector(".asly").src);
        });
    });
});

function removeAdd() {
    images.forEach((img) => {
        img.classList.remove("active");
        this.classList.add("active");
    });
}

let minus = document.querySelector(".minus");
let zero = document.querySelector(".zero");
let puls = document.querySelector(".plus");
let int = 0;

puls.onclick = function() {
    int += 1;
    zero.innerHTML = int;
}

minus.onclick = function() {
    zero.innerHTML -= 1;
}

let addCar = document.querySelector(".addCar");
let cart = document.querySelector(".cart");
let close = document.querySelector("i");

cart.onclick = () => {
    addCar.style.display = 'block';
    close.addEventListener("click", () => {
        addCar.style.display = 'none';
    });
};

// Get item To Add Car 
let btn = document.querySelector(".btn");

btn.onclick = () => {
    if (window.localStorage.getItem("profelImage")) {

    }
}