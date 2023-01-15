var rebound = true
var pop = document.getElementById("product-board")
var image = document.getElementById("image")
var currentTitle = document.getElementById("title")
var currentPrice = document.getElementById("price")

function showPopUp(imageID, title, price) {
    if (rebound == true) {
        image.src = imageID
        currentTitle.innerHTML = title
        currentPrice.innerHTML = price

        pop.style.display = "block"

        rebound = false
    } else {
        pop.style.display = "none"
        rebound = true
    }
}



function changeBackground(a) {
    var backgroundURL
    var background = document.getElementById("all-product")
    if (a=="1") {
        backgroundURL = "images/product-slideshow/citron.jpg"
    } else if (a=="2") {
        backgroundURL = "images/product-slideshow/coffee.jpg"
    } else if (a=="3") {
        backgroundURL = "images/product-slideshow/iced-coffee.jpg"
    } else if (a=="4") {
        backgroundURL = "images/product-slideshow/iced-cookie.jpg"
    } else if (a=="5") {
        backgroundURL = "images/product-slideshow/iced-lemon.jpg"
    } else if (a=="6") {
        backgroundURL = "images/product-slideshow/peach.jpg"
    }
    background.style.backgroundImage = "url('"+backgroundURL+"')"
}