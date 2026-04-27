function calculate(){

   const inputEle = document.querySelector('.js-input');
   const cost = Number(inputEle.value);
   let total = cost;

   if (total < 40) {
      total += 10;
   }

   document.querySelector('.js-cost').textContent = `$${total}`;
}

function handleCost(event){
    if(event.key == 'Enter'){
        calculate();
    }
}