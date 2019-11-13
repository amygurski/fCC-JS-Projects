//CASH REGISTER CHALLENGE

//Denominations and their values in cash drawer
const MONEY = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.10],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]; 

//Main function which inputs price = cost of item, cash = payment, and cid = cash-in-drawer. Returns cash drawer status and change due in coins and bills
function checkCashRegister(price, cash, cid) {
  var changeDue = Math.round((cash-price) * 100) / 100; 
  var cashInDrawer = calcTotal(cid); 
  var result = { status: null, change: [] };
 
  //Not enough in drawer to make change
  if (changeDue > cashInDrawer) {
    //Not enough cash in drawer
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  } else if (cashInDrawer === changeDue) {
    //Uses all the cash in drawer
    result.status = "CLOSED";
    result.change = cid;
    return result;
  } else {
    //Determine bills and coins needed to make change from largest denimonation to smallest
    result.status = "OPEN";
    for (let i = cid.length-1; i>=0; i--) {
      var total = 0;
      //While denomination exists in drawer and change due equals or exceeds it
      while (cid[i][1] > 0 && changeDue >= MONEY[i][1]) {
        //reduce change due by denomination
        changeDue -= MONEY[i][1]; 
        //reduce available denomination in drawer
        cid[i][1] -= MONEY[i][1];
        //calc total $ of this denomination to give
        total += MONEY[i][1]; 
        changeDue = Math.round(changeDue * 100) / 100; 
      }
      
      //Only add to return array if denomination used
      if (total > 0) {
          result.change.push([cid[i][0], total]);
      }
    }
  
      //If there is still change left to make now then didn't have enough of a denomination to return correct change
     if (changeDue != 0) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
    }
 return result;
  }
}

//Total Cash in Drawer
function calcTotal(cid) {
  var sum = 0;
  for (let i=0; i< cid.length; i++) {
    sum += cid[i][1];
  }
  sum = Math.round(sum * 100) / 100; 
  return sum;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);