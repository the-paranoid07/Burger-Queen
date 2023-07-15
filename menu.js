const endpoint=`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`;


async function getMenu(){
    let response = await fetch(endpoint);
    let responseData = await response.json();

    renderDataOntoUI(responseData);
}
getMenu();

function renderDataOntoUI(data){
    const menu = document.getElementById("menuContainer");
    menu.innerHTML="";
    data.forEach((item) => {
        const {imgSrc,name,price} = item;
        menu.innerHTML += `
        <div class="menu-items">
                        <div class="item-image">
                            <img src="${imgSrc}" alt="item">
                        </div>
                        <div class="item-details">
                            <div class="left">
                                <span class="item-name">${name}</span>
                                <span class="item-price">$${price}/-</span>
                            </div>
                            <div class="right">
                                <img src="./assets/add-icon.png" alt="add">
                            </div>
                        </div>
                    </div>
        `
    })
}

