var category = document.getElementsByClassName("category")


function show(a) {
    if (a == "all") {
        
        for(var i = 0; i < category.length; i++){
            category[i].style.display = "block";
        }

    } else {
        
        for(var i = 0; i < category.length; i++){
            category[i].style.display = "none";
        }

        var type = document.getElementById(a)
        type.style.display = "block"
    }

}