function initDetails() {
    nameItem = window.localStorage.getItem('currentItem')

   shop.forEach(category => {
        category.items.forEach(currentItem => {
            if (nameItem == currentItem.name) {
                item = currentItem
            }
        });
    });

    document.querySelector(".titleItem").innerText = item.name
    document.querySelector(".priceItem").innerText = item.price + "€"
    if (item.remaining != 0) {
        document.querySelector(".stock").classList.add("true") 
        document.querySelector(".stock").classList.remove("false") 
    }else{
        document.querySelector(".stock").classList.add("false") 
        document.querySelector(".stock").classList.remove("true") 
    }
    document.querySelector(".desc").innerText = item.desc
}
function checkForAvailability(){

}
document.querySelector(".checkboxSize").addEventListener("click", function(e) {
    size = e.target;

});