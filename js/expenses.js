function nameAdded() {

}


// })

document.getElementById('select-btn').addEventListener('click', function () {


    const playerName = document.getElementById('neymar');
    const playerNameString = playerName.innerText;




    // const coaseFinal = parseFloat(coaseInputString);


})



































document.getElementById('players-expenses').addEventListener('click', function () {
    console.log('click');



})




document.getElementById('calculate-btn').addEventListener('click', function () {


    const coaseInput = document.getElementById('coase-input');
    const coaseInputString = coaseInput.value;
    const coaseFinal = parseFloat(coaseInputString);

    const managerInput = document.getElementById('manager-input');
    const managerInputString = managerInput.value;
    const managerFinal = parseFloat(managerInputString);


    const playCost = document.getElementById('play-cost');
    const playCostString = playCost.innerText;
    const playCostFinal = parseFloat(playCostString);


    const totalCost = document.getElementById('total-cost');
    const totalCostString = totalCost.innerText;
    const totalCostFinal = parseFloat(totalCostString);
    const totalExpenses = coaseFinal + managerFinal + playCostFinal;


    totalCost.innerText = totalExpenses;


})