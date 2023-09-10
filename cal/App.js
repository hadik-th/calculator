let numbers = document.querySelectorAll(".numbers");


let digits = "";
let sign = "";




function getNumbers() {
    numbers.forEach((number) => {
        number.addEventListener("click", (e) => {
            e.preventDefault();
            digits += (e.target.innerText);
            delArr = digits.split("");
            val = delArr.join("");
            previous.innerText = val;        
        })
    })
}




function getOperand() {
    let operand = document.querySelectorAll(".operand");
    operand.forEach((operand) => {
        operand.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(e.target.innerText);
            sign = e.target.innerText;
            digits += sign;
            operand.style.backgroundColor="green"


        })
    })

}

function calulateResult() {
    let equalbutton = document.getElementById('data-equals');
    equalbutton.addEventListener("click", (e) => {
        e.preventDefault();
        let value = (eval(digits));
        result.innerText = value;


    })
}

function allClear() {
    clear.addEventListener("click", (e) => {
        e.preventDefault();
        previous.innerText = "";
        result.innerText = "";
        digits = "";
        sign = "";


    })
}

function digitDel() {
    del.addEventListener("click", (e) => {
        e.preventDefault();

        digits = digits.slice(0, -1);
        previous.innerText = digits;



    })

}






getNumbers();
getOperand();
allClear();
digitDel();
calulateResult();