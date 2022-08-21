//-----------------------------minus for both
function decreasePrice_Quantity(quantity, price, quantityField, priceField) {
  //-----------------------------input value decreased
  quantity = --quantity;
  //console.log(quantity);
  quantityField.value = quantity;

  //-------------------------------------price decreased
  let fprice = document.getElementById(priceField);
  //console.log(fprice);
  let currentPrice = parseInt(fprice.innerText);
  currentPrice -= price;
  fprice.innerText = currentPrice;
}

//-----------------------------plus for both
function increasePrice_Quantity(quantity, price, quantityField, priceField) {
  //-----------------------------input value increased
  quantity = ++quantity;
  console.log(quantity);
  quantityField.value = quantity;

  //-------------------------------------price increased
  let fprice = document.getElementById(priceField);
  console.log(fprice);
  let currentPrice = parseInt(fprice.innerText);
  currentPrice += price;
  fprice.innerText = currentPrice;
}

//--------------------------------sub call for minus
function minus(buttonId, inputField) {
  let field = document.getElementById(inputField);
  let quantity = field.value;
  //console.log(quantity);

  if (buttonId == "iminus" && quantity > 0) {
    decreasePrice_Quantity(quantity, 1000, field, "iprice");
  } else if (buttonId == "cminus" && quantity > 0) {
    decreasePrice_Quantity(quantity, 50, field, "cprice");
  }
}

//--------------------------------sub call for plus
function plus(buttonId, inputField) {
  let field = document.getElementById(inputField);
  let quantity = field.value;
  //console.log(quantity);

  if (buttonId == "iplus") {
    increasePrice_Quantity(quantity, 1000, field, "iprice");
  } else if (buttonId == "cplus") {
    increasePrice_Quantity(quantity, 50, field, "cprice");
  }
}

//----------------------------------------calculation part

function calculation() {
  let iprice = parseInt(document.getElementById("iprice").innerHTML);
  let cprice = parseInt(document.getElementById("cprice").innerHTML);

  let total = iprice + cprice;
  let vat = total / 10;
  console.log(vat);
  let subtotal = total + vat;
  //----------------------------getting field
  let totalPrice = document.getElementById("total");
  let vatPrice = document.getElementById("vat");
  let subtotalPrice = document.getElementById("subTotal");
  //-----------------------------setting value
  totalPrice.innerText = total;
  vatPrice.innerText = vat;
  subtotalPrice.innerText = subtotal;
}

//---------------------main call
function iphnMinus() {
  minus("iminus", "ifield");
  calculation();
}
function iphnPlus() {
  plus("iplus", "ifield");
  calculation();
}

function icoverMinus() {
  minus("cminus", "cfield");
  calculation();
}

function icoverPlus() {
  plus("cplus", "cfield");
  calculation();
}

//----------------------reseting field
function remove(q_id, priceField, price) {
  let quantityField = document.getElementById(q_id);
  quantityField.value = 1;
  let pField = document.getElementById(priceField);
  pField.innerText = price;
}

function iremove() {
  remove("ifield", "iprice", 1000);
  calculation();
}
function cremove() {
  remove("cfield", "cprice", 50);
  calculation();
}
