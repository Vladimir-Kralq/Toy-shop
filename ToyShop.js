




function toyShop (input) {


let priceTrip= Number(input[0]);
let numPuzzel= Number(input[1]);
let talkKukla= Number(input[2]);
let tedyBear= Number(input[3]);
let minion= Number(input[4]);
let truck= Number(input[5]);



let Sum= numPuzzel * 2.60 +talkKukla*3 +tedyBear*4.10 + minion*8.20 + truck* 2 ;
let totalToys= numPuzzel + talkKukla +tedyBear + minion + truck ;

if(totalToys >=50){
    totalToys= Sum * 0.75
}

let moneyWon = totalToys;

moneyWon = 0.90 * moneyWon


if(moneyWon >=priceTrip) {
    let leftMoney = moneyWon - priceTrip
    console.log(`Yes! ${leftMoney} lv left.`)
}
else{
    let notEnought = priceTrip- moneyWon
    console.log(`Not enough money! ${ notEnought} lv needed.`)
}

}





toyShop(["40.8", "20", "25", "30", "50", "10"])