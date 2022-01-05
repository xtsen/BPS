function load() {
    if (news.length == 0) {
        document.querySelector("#news").style.display = "none";
    }
    initNewReleases()
    initShop()
}
function initNewReleases() {
    section = document.querySelector("#news")
    sectionTitleBanner = `
            <div class="sectionTitle">
                <h2>Nouveautés</h2>
            </div>
            `
    sectionTitleContainer = `
                    <div class="sectionContainer Nouveautés">
                    `
            section.innerHTML = sectionTitleBanner + sectionTitleContainer
    news.forEach(newItem => {
        item = shop[newItem.idCategory].items[newItem.idItem]
        newCard(document.querySelector(`.sectionContainer.Nouveautés`), item)
    });
    section.innerHTML +=`</div>`
}
function initShop() {
    shop.forEach(category => {
        section = category.slot
        sectionTitleBanner = `
                <div class="sectionTitle">
                    <h2>${category.name}</h2>
                </div>
                `
        sectionTitleContainer = `
                <div class="sectionContainer ${category.name}">
                `
        section.innerHTML = sectionTitleBanner + sectionTitleContainer
        category.items.forEach(item => {
            newCard(document.querySelector(`.sectionContainer.${category.name}`), item)
        });
        section.innerHTML +=`</div>`
    });
}
function newCard(dest, item) {
    dest.innerHTML +=`
        <div class="cardItem" onclick="goThere(event, 'details')">
            <div class="imgCard"></div>
            <div class="infoCard">
                <h2 class="titleCard">${item.name}</h2>
                <p class="price">${item.price}€</p>
            </div>
        </div>
        `
}
function goThere(e, dest) {
    card = e.target || e.srcElement;
    childs = card.childNodes
    infoContainer = childs[3]
    nameCard = infoContainer.childNodes[1].innerText
    console.log(nameCard);
    window.localStorage.setItem("currentItem", nameCard)
    window.location.href = `./${dest}.html`
}