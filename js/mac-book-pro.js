//==========Memory portion========//
const bestPrice = document.getElementById('best-price');
const extraMemory = document.getElementById('extra-memory');
const totalPrice =document.getElementById('total-price');

const firstMemory = document.getElementById('first-memory');
const secondMemory = document.getElementById('second-memory');
///handle button event handler
firstMemory.addEventListener('click', function(){
    extraMemory.innerText ='0';
    //console.log(firstMemory);
    updateTotal();
})
///handle button event handler
secondMemory.addEventListener('click', function(){
    extraMemory.innerText ='180';
    //console.log(secondMemory);
    updateTotal();
})

//update total price
function updateTotal(){
    let  memory= Number(extraMemory.innerText);
    let price = Number(bestPrice.innerText);
    let storage = Number(extraStorage.innerText);
    let delivery = Number(deliveryCharge.innerText);
    const grandTotal = memory+ price + storage + delivery;
    (totalPrice.innerText) = grandTotal;
    console.log(extraMemory.innerText,totalPrice.innerText,extraStorage.innerText,deliveryCharge.innerText);                          
}

//===============storage portion
const firstStorage = document.getElementById('first-storage');
const secondStorage= document.getElementById('second-storage');
const thirdStorage= document.getElementById('third-storage');

const extraStorage = document.getElementById('extra-storage')
///handle button event handler
firstStorage.addEventListener('click', function(){
    extraStorage.innerText ='0';
    //console.log(firstMemory);
    updateTotal();
})
///handle button event handler
secondStorage.addEventListener('click', function(){
    extraStorage.innerText ='100';
    //console.log(secondMemory);
    updateTotal();
})
///handle button event handler
thirdStorage.addEventListener('click', function(){
    extraStorage.innerText ='180';
    //console.log(secondMemory);
    updateTotal();
})

//**************delivery options
const prime= document.getElementById('prime');
const charge= document.getElementById('charge');

const deliveryCharge = document.getElementById('delivery-charge');
///handle button event handler
prime.addEventListener('click', function(){
    deliveryCharge.innerText ='0';
    //console.log(firstMemory);
    updateTotal();
})
///handle button event handler
charge.addEventListener('click', function(){
    deliveryCharge.innerText ='20';
    //console.log(secondMemory);
    updateTotal();
})
       
///handle button event handler
document.getElementById('apply-button').addEventListener('click',function(){
    console.log('apply button clicked');
    //set the input button
    const applyField = document.getElementById("apply-input");
    const applyInput = applyField.value;
   
//check the pomo code
if(applyInput == 'stevekaku'){
    //console.log('valid pomo code');
    
}
//clear input field
applyField.value = '';
})

