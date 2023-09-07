let previousValue = 0;
let currentValue = 0;
let activeOperation = null;
let op_type = "";

//#region Display Field
const displayField = document.querySelector('.display-field');
//#endregion

//#region Unary Operator Buttons
const un_ACButton = document.getElementById('un_ac');
const un_MinusButton = document.getElementById('un_minus');
const un_PercentButton = document.getElementById('un_p');
//#endregion

//#region Binary Operator Buttons
const bn_DivisionButton = document.getElementById('bn_div');
const bn_MultiplicationButton = document.getElementById('bn_mul');
const bn_SubstractionButton = document.getElementById('bn_sub');
const bn_AdditionButton = document.getElementById('bn_add');
const bn_EqualityButton = document.getElementById('bn_eql');
//#endregion

console.log(bn_MultiplicationButton);

//#region Button Collections
const dataButtons = sortButtons(document.querySelectorAll('.ct--data-button'));
const binaryButtons = [
    bn_DivisionButton,
    bn_MultiplicationButton,
    bn_SubstractionButton,
    bn_AdditionButton,
    bn_EqualityButton
]
//#endregion

//#region Non Shown Operator Buttons
const nonShownOperations = [un_PercentButton, ...binaryButtons];
//#endregion

addEventListenerToAll(dataButtons, displayField);

//#region Unary Operation Handlers
un_PercentButton.addEventListener('click', (e) => {
    displayField.innerHTML =
    (currentValue / 100).toString();

    activeOperation = un_PercentButton;

    previousValue = 0;
    currentValue = parseFloat(displayField.innerHTML);
});

un_ACButton.addEventListener('click', (e) => {
    displayField.innerHTML = '0';

    activeOperation = un_ACButton;

    previousValue = 0;
    currentValue = 0;
});

un_MinusButton.addEventListener('click', (e) => {
    displayField.innerHTML = 
    (-parseFloat(displayField.innerHTML)).toString();

    activeOperation = un_MinusButton;

    previousValue = 0;
    currentValue = parseFloat(displayField.innerHTML);
});
//#endregion

//#region Binary Operation Handlers
bn_EqualityButton.addEventListener('click', (e) => {
    if (op_type === "add") {
        displayField.innerHTML = (previousValue + currentValue).toString();
    } else if (op_type === "div") {
        displayField.innerHTML = (previousValue / currentValue).toString();
    } else if (op_type === "sub") {
        displayField.innerHTML = (previousValue - currentValue).toString();
    } else if (op_type === "mul") {
        displayField.innerHTML = (previousValue * currentValue).toString();
    } else if (activeOperation === null){
        console.log("in default");
    }

    activeOperation = bn_EqualityButton;

    previousValue = 0;
    currentValue = parseFloat(displayField.innerHTML);
});

bn_DivisionButton.addEventListener('click', (e) => {
    activeOperation = bn_DivisionButton;
    previousValue = currentValue;
    currentValue = parseFloat(displayField.innerHTML);
    op_type = "div";
});

bn_MultiplicationButton.addEventListener('click', (e) => {
    activeOperation = bn_MultiplicationButton;
    previousValue = currentValue;
    currentValue = parseFloat(displayField.innerHTML);
    op_type = "mul";
});

bn_AdditionButton.addEventListener('click', (e) => {
    activeOperation = bn_AdditionButton;
    previousValue = currentValue;
    currentValue = parseFloat(displayField.innerHTML);

    op_type = "add";
});

bn_SubstractionButton.addEventListener('click', (e) => {
    activeOperation = bn_SubstractionButton;
    previousValue = currentValue;
    currentValue = parseFloat(displayField.innerHTML);

    op_type = "sub";
});
//#endregion