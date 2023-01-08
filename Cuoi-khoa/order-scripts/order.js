var rebound = true
var image = document.getElementById("image")
var titleName = document.getElementById("title")
var Currentprice = document.getElementById("price")
var board = document.getElementById("order-board")


function showItem(imageID, title, price) {
    
    if (rebound==true) {
        image.src = imageID
        titleName.innerHTML = title
        Currentprice.innerHTML = price
        rebound = false
        board.style.display = "block"
    } else {
        board.style.display = "none"
        rebound = true
    }

}


// SPECIAL_BOARD

var specBoard = document.getElementById("special-board")

function showSpecial(imageID, title, cost1, cost2, cost3) {
    
    if (rebound==true) {
        document.getElementById("spec-image").src = imageID
        document.getElementById("spec-title").innerHTML = title
        document.getElementById("cost1").innerHTML = cost1
        document.getElementById("cost2").innerHTML = cost2
        document.getElementById("cost3").innerHTML = cost3
        rebound = false
        specBoard.style.display = "block"
    } else {
        specBoard.style.display = "none"
        rebound = true
    }

}

