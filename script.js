const endpoint=`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`;

async function getMenu(){
    let response = await fetch(endpoint);
    let responseData = await response.json();
    renderDataOntoUI(responseData);
    let displayData = await TakeOrder(responseData);
    let order = await orderPrep();
    let orderPayment = await orderPay(order);
    thankyoufnc(orderPayment);
}
getMenu();
//taking order
function TakeOrder(data){
    let menuCards = [];
    for(let i =0 ;i<3;i++){
        menuCards.push(data[i]);
    }
    return new Promise(resolve => {

        setTimeout(()=>{
            resolve(menuCards);
        },2500)
    })
}
//preparing order and defining order status
function orderPrep(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                order_status : true,
                paid : false
            })
        },1500)
    })
}

//doing payment of order and setting paid => true
function orderPay(order){
    return new Promise(resolve => {
        setTimeout(()=>{
            order.paid = true;
            resolve({paid : true});
        })
    })
}
//showing alert to show gratitude
function thankyoufnc(orderPayment){
    if(orderPayment.paid){
        alert("Thankyou For Eating With Us Today!")
    }
}
//rendering data on to Ui to be displayed
function renderDataOntoUI(data){
    const menu = document.getElementById("menuContainer");
    menu.innerHTML="";
   for(let i =0 ;i< 3 ;i++){
    const {imgSrc,name,price} = data[i];
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
   }
}

//opening Restraunt second page on click of "see all"
function openMenuWindow(){
    window.open("./menu.html");
}
